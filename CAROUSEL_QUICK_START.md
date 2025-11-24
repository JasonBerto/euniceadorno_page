# Image Carousel - Quick Start Guide

## ✅ What Was Created

A fully-functional image carousel with:
- ✨ Auto-advance (changes slides every 5 seconds by default)
- 🎯 Position indicators (dots showing current slide)
- ⬅️➡️ Navigation arrows (prev/next buttons)
- ⏸️ Pause on hover
- 📱 Touch swipe support
- ⌨️ Keyboard navigation

## 📁 Files Created

```
✅ _includes/carousel.html          # Carousel component
✅ _data/carousel_images.yml        # Sample image data
✅ pages/carousel-demo.md           # Demo page
✅ assets/css/main.scss             # Carousel styles added
✅ assets/js/main.js                # Carousel functionality added
```

## 🚀 How to Use

### Step 1: Create Image Data

Create or edit `_data/my_carousel.yml`:

```yaml
- url: /assets/images/image1.jpg
  alt: Image 1 description
  caption: Optional caption

- url: /assets/images/image2.jpg
  alt: Image 2 description
  caption: Another caption

- url: /assets/images/image3.jpg
  alt: Image 3 description
```

### Step 2: Add to Any Page

In your page markdown (e.g., `index.md`, `pages/gallery.md`):

```liquid
---
layout: page
title: My Gallery
---

# My Photo Gallery

{% include carousel.html 
   interval=5000
   images=site.data.my_carousel 
%}

More content here...
```

### Step 3: View Your Carousel

Visit the page and see your carousel in action!

## 🎨 Quick Customizations

### Change Slide Timing

```liquid
{% include carousel.html 
   interval=3000      <!-- 3 seconds -->
   images=site.data.my_carousel 
%}
```

### Use Different Image Sets

```liquid
<!-- Hero carousel -->
{% include carousel.html images=site.data.hero_images %}

<!-- Gallery carousel -->
{% include carousel.html images=site.data.gallery_images %}
```

## 📍 View the Demo

Navigate to: **http://localhost:4000/carousel-demo/**

Or click "Carousel" in the sidebar menu.

## 🎯 Features

| Feature | Description |
|---------|-------------|
| **Auto-Advance** | Slides change automatically (default: 5s) |
| **Pause on Hover** | Stops when mouse is over carousel |
| **Click Dots** | Jump to any slide instantly |
| **Arrow Buttons** | Prev/Next navigation (appear on hover) |
| **Keyboard** | Use arrow keys to navigate |
| **Touch Swipe** | Swipe left/right on mobile |
| **Responsive** | Adapts to all screen sizes |

## 🔧 Common Settings

### Faster Transitions (3 seconds)
```liquid
{% include carousel.html interval=3000 images=site.data.my_carousel %}
```

### Slower Transitions (10 seconds)
```liquid
{% include carousel.html interval=10000 images=site.data.my_carousel %}
```

## 📖 Full Documentation

See `CAROUSEL_DOCUMENTATION.md` for complete details including:
- Advanced customization
- Styling options
- JavaScript configuration
- Troubleshooting
- Accessibility features

## ✨ Example: Homepage Hero

Replace homepage content with:

```liquid
---
layout: default
---

{% include carousel.html 
   interval=6000
   images=site.data.hero_carousel 
%}

<div class="portfolio-grid">
  <!-- your portfolio items -->
</div>
```

## 🎨 Change Aspect Ratio

Edit `assets/css/main.scss` and find `.carousel-slides`:

```scss
.carousel-slides {
    aspect-ratio: 16 / 9;  // Widescreen (current)
    // aspect-ratio: 4 / 3;   // Standard
    // aspect-ratio: 1 / 1;   // Square
}
```

## 💡 Tips

1. **Image Size**: Use images around 1920×1080px for best quality
2. **Compress Images**: Optimize before uploading to improve load times
3. **Limit Slides**: Keep to 5-10 images for best performance
4. **Alt Text**: Always provide descriptive alt text for accessibility
5. **Captions**: Use captions to provide context

## 🐛 Troubleshooting

**Carousel not showing?**
- Check that images exist at specified paths
- Verify data file is in `_data/` folder
- Ensure Jekyll has rebuilt (check terminal)

**Not auto-advancing?**
- Check `interval` is set (e.g., `interval=5000`)
- Look for JavaScript errors in browser console
- Verify you have multiple images

**Indicators not clickable?**
- Check browser console for errors
- Verify JavaScript is loading
- Test in different browser

## 🌐 Browser Support

✅ Works in all modern browsers (Chrome, Firefox, Safari, Edge)  
✅ Mobile-friendly (iOS, Android)  
✅ No external dependencies required

---

**Created**: November 12, 2025  
**Status**: ✅ Ready to Use  
**Demo**: http://localhost:4000/carousel-demo/

