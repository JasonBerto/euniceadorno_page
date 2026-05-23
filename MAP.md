# Project Map — Eunice Adorno Photography Portfolio

Jekyll static site for [euniceadorno.com](https://euniceadorno.com/). This document describes the folder layout and what each directory is used for.

## Folder structure

```
euniceadorno_page/
├── _config.yml              # Jekyll site config (collections, plugins, excludes)
├── index.html               # Homepage — portfolio grid
├── CNAME                    # Custom domain for GitHub Pages
│
├── _data/                   # YAML data (carousel image lists, etc.)
├── _includes/               # Reusable HTML partials (carousel, contact form)
├── _layouts/                # Page templates (default, page, project)
├── _portfolio/              # Portfolio collection — project markdown (source of truth)
│
├── pages/                   # Static pages (bio, contact, demos)
├── assets/                  # CSS, JS, images, fonts served on the site
│   ├── css/                 # Main stylesheet entry (main.scss)
│   ├── sass/                # Legacy SASS partials (not imported by main.scss)
│   ├── js/                  # Client-side scripts (carousel, UI)
│   ├── images/              # Site images
│   │   ├── portfolio/       # Per-project photos (by slug)
│   │   ├── hero/            # Homepage hero images
│   │   └── gallery/         # General gallery assets
│   └── webfonts/            # Font Awesome icon fonts
│
├── icons/                   # SVG icons and favicon
├── portfolio/               # Legacy — old project markdown + image folders (prefer _portfolio/)
├── portada/                 # Reserved / empty (cover assets placeholder)
├── _notes/                  # Reserved / empty (internal notes)
│
├── .github/workflows/       # GitHub Actions — deploy to GitHub Pages
├── _backup/                 # Archived old site content (excluded from Jekyll build)
├── .legacy_files/           # Pre-migration HTML/CSS backups (not published)
│
├── _site/                   # Generated build output (do not edit)
├── vendor/                  # Bundler-installed Ruby gems (local only)
├── .bundle/                 # Bundler local config
└── .sass-cache/             # Sass compile cache (generated)
```

## Folder reference

| Folder | Purpose |
|--------|---------|
| **`_data/`** | Structured data in YAML. Carousel definitions per project (e.g. `mujeres_flores_carousel.yml`), shared `carousel_images.yml`, and legacy `portfolio.yml`. Loaded by layouts/includes as `site.data.*`. |
| **`_includes/`** | HTML fragments included in layouts: `carousel.html` (image carousels), `contact-form.html` (contact embed). |
| **`_layouts/`** | Jekyll templates: `default.html` (sidebar + shell), `page.html` (bio, contact), `project.html` (portfolio project pages). |
| **`_portfolio/`** | **Active portfolio content.** One `.md` file per photography series; Jekyll collection `portfolio` with URLs `/portfolio/:name/`. Add or edit projects here. |
| **`pages/`** | Standalone Markdown pages: `bio.md`, `contact.md`, and optional demos (e.g. `carousel-demo.md`). Included via `_config.yml` → `include: pages`. |
| **`assets/`** | Everything referenced in the live site (styles, scripts, images, webfonts). |
| **`assets/css/`** | Entry point `main.scss` — compiled to site CSS (all theme styles in one file). |
| **`assets/sass/`** | Older modular SASS (`base/`, `components/`, `layout/`, `libs/`). Kept for reference; **not** wired into `main.scss` today. |
| **`assets/js/`** | `main.js` — carousel behavior, smooth scrolling, and other light UI logic. |
| **`assets/images/portfolio/`** | **Canonical image storage** — subfolders per project slug (`desandar/`, `mujeres-flores/`, etc.). |
| **`assets/images/hero/`** | Images for the homepage hero section. |
| **`assets/images/gallery/`** | Shared or miscellaneous gallery images. |
| **`assets/webfonts/`** | Font Awesome SVG/font files for icons. |
| **`icons/`** | Small UI assets: `favicon.ico`, `email.svg`, `instagram2.svg`, etc. |
| **`portfolio/`** | **Legacy duplicate.** Older `.md` files and some per-project image dirs from an earlier layout. New work should use `_portfolio/` + `assets/images/portfolio/`. |
| **`portada/`** | Empty placeholder — intended for cover/home imagery if needed later. |
| **`_notes/`** | Empty placeholder — for local notes (not built or deployed). |
| **`.github/workflows/`** | CI: builds the Jekyll site and publishes to GitHub Pages (`pages.yml`). |
| **`_backup/`** | Old exports, captures, and superseded assets. Listed in `_config.yml` `exclude` — never deployed. |
| **`.legacy_files/`** | Archived pre-Jekyll HTML and CSS backups from migration. Not part of the live site. |
| **`_site/`** | Output of `jekyll build` / `jekyll serve`. Regenerated; do not commit changes here. |
| **`vendor/`** | Ruby dependencies installed by Bundler (`bundle install`). Excluded from Jekyll processing. |
| **`.bundle/`** | Bundler path/config for this repo. |
| **`.sass-cache/`** | Temporary Sass compilation cache. |

## Root files (not folders)

| File | Purpose |
|------|---------|
| `_config.yml` | Site title, URL, collections, plugins, Sass mode, and build excludes. |
| `index.html` | Homepage layout and portfolio grid. |
| `Gemfile` / `Gemfile.lock` | Ruby/Jekyll dependencies. |
| `start-server.sh` | Convenience script to run the local dev server. |
| `favicon.ico` | Site favicon at repo root (also `icons/favicon.ico`). |
| `README.md` | Human-facing setup and usage guide. |
| `LLM_WEBSITE_GUIDE.md` | Detailed guide for AI-assisted edits. |
| `DEPLOYMENT_CHECKLIST.md` | Pre-deploy verification steps. |

## Where to put new content

| Task | Location |
|------|----------|
| New photography project | `_portfolio/your-slug.md` |
| Project images | `assets/images/portfolio/your-slug/` |
| Carousel image list | `_data/your_slug_carousel.yml` |
| About / contact copy | `pages/bio.md`, `pages/contact.md` |
| Global styles | `assets/css/main.scss` |
| Shared UI snippet | `_includes/` + reference from a layout |

## Build & local dev

```bash
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

Built HTML lands in `_site/`; production deploy uses GitHub Actions (`.github/workflows/pages.yml`).
