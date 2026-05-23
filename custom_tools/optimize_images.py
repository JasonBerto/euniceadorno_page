#!/usr/bin/env python3
"""
Scan portfolio images and optionally compress files over 5 MB down to 2 MB max.

Usage:
    python custom_tools/optimize_images.py

Requires: pip install Pillow
"""

from __future__ import annotations

import io
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("Pillow is required. Install it with: pip install Pillow")
    sys.exit(1)

REPO_ROOT = Path(__file__).resolve().parents[1]
PORTFOLIO_DIR = REPO_ROOT / "assets" / "images" / "portfolio"
SIZE_THRESHOLD_BYTES = 5 * 1024 * 1024  # 5 MB
#TARGET_MAX_BYTES = 2 * 1024 * 1024  # 2 MB
TARGET_MAX_BYTES = 5 * 1024 * 1024  # 5 MB
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".tif", ".tiff"}


def format_size(num_bytes: int) -> str:
    """Human-readable file size."""
    if num_bytes < 1024:
        return f"{num_bytes} B"
    if num_bytes < 1024 * 1024:
        return f"{num_bytes / 1024:.1f} KB"
    return f"{num_bytes / (1024 * 1024):.2f} MB"


def find_oversized_images(root: Path) -> list[Path]:
    """Return image paths larger than SIZE_THRESHOLD_BYTES, sorted by size descending."""
    oversized: list[tuple[int, Path]] = []
    if not root.is_dir():
        print(f"Portfolio folder not found: {root}")
        return []

    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in IMAGE_EXTENSIONS:
            continue
        if path.name.startswith("."):
            continue
        size = path.stat().st_size
        if size > SIZE_THRESHOLD_BYTES:
            oversized.append((size, path))

    oversized.sort(key=lambda item: item[0], reverse=True)
    return [path for _, path in oversized]


def save_jpeg(img: Image.Image, quality: int) -> bytes:
    buffer = io.BytesIO()
    rgb = img.convert("RGB") if img.mode not in ("RGB", "L") else img
    rgb.save(buffer, format="JPEG", quality=quality, optimize=True, progressive=True)
    return buffer.getvalue()


def save_webp(img: Image.Image, quality: int) -> bytes:
    buffer = io.BytesIO()
    img.save(buffer, format="WEBP", quality=quality, method=6)
    return buffer.getvalue()


def save_png(img: Image.Image, compress_level: int = 9) -> bytes:
    buffer = io.BytesIO()
    img.save(buffer, format="PNG", optimize=True, compress_level=compress_level)
    return buffer.getvalue()


def compress_with_quality_search(
    img: Image.Image,
    save_fn,
    min_q: int = 15,
    max_q: int = 95,
) -> tuple[bytes, int] | None:
    """Binary-search the highest quality that stays at or under TARGET_MAX_BYTES."""
    best_data: bytes | None = None
    best_q = min_q
    low, high = min_q, max_q

    while low <= high:
        mid = (low + high) // 2
        data = save_fn(img, mid)
        if len(data) <= TARGET_MAX_BYTES:
            best_data = data
            best_q = mid
            low = mid + 1
        else:
            high = mid - 1

    if best_data is None:
        return None
    return best_data, best_q


def resize_image(img: Image.Image, scale: float) -> Image.Image:
    new_w = max(1, int(img.width * scale))
    new_h = max(1, int(img.height * scale))
    return img.resize((new_w, new_h), Image.Resampling.LANCZOS)


def try_jpeg_under_limit(img: Image.Image) -> tuple[bytes, str] | None:
    """Compress as JPEG, resizing only if needed."""
    working = img.convert("RGB") if img.mode not in ("RGB", "L") else img
    scales = (1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3)

    for scale in scales:
        candidate = resize_image(working, scale) if scale < 1.0 else working
        result = compress_with_quality_search(candidate, save_jpeg)
        if result:
            data, quality = result
            if scale < 1.0:
                return data, f"resized to {scale:.0%}, JPEG quality {quality}"
            return data, f"JPEG quality {quality}"
    return None


def try_webp_under_limit(img: Image.Image) -> tuple[bytes, str] | None:
    working = img
    scales = (1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4)

    for scale in scales:
        candidate = resize_image(working, scale) if scale < 1.0 else working
        result = compress_with_quality_search(candidate, save_webp)
        if result:
            data, quality = result
            if scale < 1.0:
                return data, f"resized to {scale:.0%}, WebP quality {quality}"
            return data, f"WebP quality {quality}"
    return None


def try_png_under_limit(img: Image.Image) -> tuple[bytes, str] | None:
    working = img
    data = save_png(working)
    if len(data) <= TARGET_MAX_BYTES:
        return data, "PNG optimized"

    for scale in (0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3):
        resized = resize_image(working, scale)
        data = save_png(resized)
        if len(data) <= TARGET_MAX_BYTES:
            return data, f"resized to {scale:.0%}, PNG optimized"
    return None


def optimize_image(path: Path) -> bool:
    """
    Reduce image to at most TARGET_MAX_BYTES while preserving quality.
    Overwrites the original file on success (may change extension for some formats).
    """
    original_path = path
    original_size = path.stat().st_size
    suffix = path.suffix.lower()

    try:
        with Image.open(path) as opened:
            img = ImageOps.exif_transpose(opened)
            if getattr(opened, "n_frames", 1) > 1:
                print("  Skipping animated image (not supported).")
                return False
            img.load()
            working = img.copy()
    except OSError as exc:
        print(f"  Could not open image: {exc}")
        return False

    outcome: tuple[bytes, str] | None = None
    output_path = path

    if suffix in (".jpg", ".jpeg"):
        outcome = try_jpeg_under_limit(working)

    elif suffix == ".webp":
        outcome = try_webp_under_limit(working)
        if outcome is None:
            outcome = try_jpeg_under_limit(working)
            if outcome:
                output_path = path.with_suffix(".jpg")

    elif suffix == ".png":
        outcome = try_png_under_limit(working)
        if outcome is None:
            outcome = try_jpeg_under_limit(working)
            if outcome:
                output_path = path.with_suffix(".jpg")

    else:
        outcome = try_jpeg_under_limit(working)
        if outcome:
            output_path = path.with_suffix(".jpg")

    if outcome is None:
        print("  Could not reduce file to 2 MB without excessive quality loss.")
        return False

    result_data, detail = outcome

    if output_path != original_path and original_path.exists():
        original_path.unlink()

    output_path.write_bytes(result_data)
    new_size = output_path.stat().st_size
    rel = output_path.relative_to(REPO_ROOT)
    print(f"  Saved: {rel}")
    print(f"  {format_size(original_size)} -> {format_size(new_size)} ({detail})")
    return True


def prompt_for_file(path: Path) -> str:
    """Show file info and return user choice."""
    size = path.stat().st_size
    rel = path.relative_to(REPO_ROOT)
    print()
    print("-" * 60)
    print(f"File: {rel}")
    print(f"Size: {format_size(size)}")
    print()
    print("  [1] Reduce to maximum 2 MB (preserve quality as much as possible)")
    print("  [2] Skip this file")
    print("  [q] Quit")
    print()
    return input("Enter choice: ").strip().lower()


def main() -> int:
    print(f"Scanning: {PORTFOLIO_DIR}")
    print(f"Threshold: files larger than {format_size(SIZE_THRESHOLD_BYTES)}")
    print()

    oversized = find_oversized_images(PORTFOLIO_DIR)
    if not oversized:
        print("No images over 5 MB found.")
        return 0

    print(f"Found {len(oversized)} image(s) over 5 MB:")
    for path in oversized:
        rel = path.relative_to(REPO_ROOT)
        print(f"  - {rel} ({format_size(path.stat().st_size)})")

    processed = 0
    skipped = 0

    for path in oversized:
        choice = prompt_for_file(path)

        if choice in ("q", "quit", "exit"):
            print("Stopped by user.")
            break
        if choice == "1":
            if optimize_image(path):
                processed += 1
            else:
                skipped += 1
        else:
            print("  Skipped.")
            skipped += 1

    print()
    print(f"Done. Optimized: {processed}, skipped/unchanged: {skipped}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
