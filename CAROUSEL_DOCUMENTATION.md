# Image Carousel Feature Documentation

## Overview

A fully-featured image carousel component with auto-advance, position indicators, and multiple navigation methods.

## Features

✨ **Auto-Advance** - Slides change automatically at set intervals  
🎯 **Position Indicators** - Visual dots show current slide position  
⬅️➡️ **Navigation Arrows** - Previous/Next buttons (appear on hover)  
⏸️ **Pause on Hover** - Autoplay pauses when user hovers  
👆 **Click Indicators** - Jump directly to any slide  
⌨️ **Keyboard Navigation** - Arrow keys for prev/next  
📱 **Touch Swipe** - Swipe left/right on mobile  
👁️ **Visibility Detection** - Pauses when tab is not visible  
♿ **Accessible** - ARIA labels and keyboard support  
📐 **Responsive** - Adapts to all screen sizes  

## Files Created

```
_includes/
  └── carousel.html           # Carousel component template

_data/
  └── carousel_images.yml     # Sample carousel images data

pages/
  └── carousel-demo.md        # Demo page

assets/css/main.scss          # Carousel styles (lines 544-720)
assets/js/main.js             # Carousel functionality (lines 20-175)
```

## Basic Usage

### 1. Create Image Data File

Create `_data/carousel_images.yml`:

```yaml
- url: /assets/images/image1.jpg
  alt: Image 1 description
  caption: Optional caption text

- url: /assets/images/image2.jpg
  alt: Image 2 description
  caption: Another caption

- url: /assets/images/image3.jpg
  alt: Image 3 description
```

### 2. Include Carousel in Your Page

In any Markdown or HTML page:

```liquid
---
layout: page
title: My Page
---

# My Page with Carousel

{% include carousel.html 
   interval=5000
   images=site.data.carousel_images 
%}
```

## Parameters

### interval (optional)
- **Type**: Number (milliseconds)
- **Default**: 5000 (5 seconds)
- **Description**: Time between automatic slide changes

**Examples:**
```liquid
interval=3000   # 3 seconds
interval=5000   # 5 seconds (default)
interval=10000  # 10 seconds
```

### images (required)
- **Type**: Array of image objects
- **Description**: Data source for carousel images

**Image Object Structure:**
```yaml
url: /path/to/image.jpg      # Required: Image path
alt: Description text         # Required: Alt text for accessibility
caption: Optional text        # Optional: Caption overlay
```

## Multiple Data Files

You can create different carousel sets:

```yaml
# _data/hero_carousel.yml
- url: /assets/images/hero1.jpg
  alt: Hero 1

# _data/portfolio_carousel.yml  
- url: /assets/images/project1.jpg
  alt: Project 1
```

Use them:
```liquid
{% include carousel.html images=site.data.hero_carousel interval=4000 %}
{% include carousel.html images=site.data.portfolio_carousel interval=6000 %}
```

## Styling Customization

### Change Aspect Ratio

In `assets/css/main.scss`:

```scss
.carousel-slides {
    aspect-ratio: 16 / 9;  // Widescreen
    // OR
    aspect-ratio: 4 / 3;   // Standard
    // OR
    aspect-ratio: 1 / 1;   // Square
    // OR
    aspect-ratio: 3 / 2;   // Photo
}
```

### Customize Indicator Colors

```scss
.carousel-indicator {
    background-color: #d0d0d0;  // Inactive color
    
    &:hover {
        background-color: #a0a0a0;  // Hover color
    }
    
    &.active {
        background-color: $heading-color;  // Active color
    }
}
```

### Change Indicator Size

```scss
.carousel-indicator {
    width: 12px;   // Default: 10px
    height: 12px;  // Default: 10px
}
```

### Adjust Transition Speed

```scss
.carousel-slide {
    transition: opacity 0.8s ease-in-out;  // Default: 0.6s
}
```

### Customize Navigation Arrows

```scss
.carousel-nav {
    width: 50px;           // Default: 44px
    height: 50px;          // Default: 44px
    background-color: rgba(255, 255, 255, 0.95);  // Opacity
    
    &.carousel-prev {
        left: 30px;        // Default: 20px
    }
    
    &.carousel-next {
        right: 30px;       // Default: 20px
    }
}
```

### Change Caption Styling

```scss
.carousel-caption {
    background: linear-gradient(to top, 
        rgba(0, 0, 0, 0.9) 0%, 
        transparent 100%
    );
    padding: 40px 30px 25px;  // Adjust padding
    
    p {
        font-size: 18px;      // Adjust font size
        color: #ffffff;       // Text color
    }
}
```

## JavaScript Configuration

### Change Auto-Advance Behavior

In `assets/js/main.js`, modify the `startAutoplay` function:

```javascript
function startAutoplay() {
    if (!isHovered && slides.length > 1) {
        autoplayTimer = setInterval(nextSlide, interval);
    }
}
```

### Disable Pause on Hover

Remove or comment out:
```javascript
// carousel.addEventListener('mouseenter', () => {
//     isHovered = true;
//     stopAutoplay();
// });
```

### Change Swipe Threshold

```javascript
const swipeThreshold = 75;  // Default: 50 pixels
```

## Advanced Examples

### Hero Carousel on Homepage

```liquid
---
layout: default
---

<div class="hero-section">
    {% include carousel.html 
       interval=6000
       images=site.data.hero_images 
    %}
</div>

<div class="content">
    <!-- Rest of homepage content -->
</div>
```

### Multiple Carousels on One Page

```liquid
## Gallery A
{% include carousel.html 
   interval=5000
   images=site.data.gallery_a 
%}

## Gallery B
{% include carousel.html 
   interval=4000
   images=site.data.gallery_b 
%}
```

### Carousel in Project Page

```markdown
---
layout: project
title: My Project
---

## Project Overview

{% include carousel.html 
   interval=5000
   images=page.carousel_images 
%}

Content here...
```

Then in front matter:
```yaml
carousel_images:
  - url: /assets/images/project/1.jpg
    alt: Image 1
  - url: /assets/images/project/2.jpg
    alt: Image 2
```

## Responsive Behavior

### Desktop (> 768px)
- Aspect ratio: 16:9
- Navigation arrows: 44px
- Indicators: 10px
- Arrows appear on hover

### Mobile (≤ 768px)
- Aspect ratio: 4:3
- Navigation arrows: 36px
- Indicators: 8px
- Touch swipe enabled

## Keyboard Controls

- **← Left Arrow**: Previous slide
- **→ Right Arrow**: Next slide
- **Tab**: Navigate through indicators
- **Enter/Space**: Activate focused indicator

## Accessibility

The carousel includes:
- ✅ ARIA labels on all buttons
- ✅ Alt text on all images
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Screen reader friendly

## Browser Support

Works in all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

Uses standard CSS and JavaScript features:
- CSS Grid and Flexbox
- CSS Transitions
- Vanilla JavaScript (no dependencies)

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Lazy Loading**: Already included with `loading="lazy"`
3. **Limit Slides**: Keep to 5-10 images for best performance
4. **Image Size**: Use consistent dimensions (e.g., 1920×1080)

## Troubleshooting

### Carousel doesn't auto-advance
- Check that interval is set: `interval=5000`
- Verify JavaScript is loading (check browser console)
- Ensure multiple slides exist

### Indicators not working
- Check that data file has multiple images
- Verify `.carousel-indicator` class in HTML
- Check browser console for errors

### Images not showing
- Verify image paths in data file
- Check that images exist in specified locations
- Look for 404 errors in browser Network tab

### Layout issues
- Check that `main.scss` includes carousel styles
- Verify no CSS conflicts with existing styles
- Test in different browsers

## Demo

Visit the demo page: [/carousel-demo/](/carousel-demo/)

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all file paths are correct
3. Ensure Jekyll is rebuilding (`--livereload`)
4. Test in different browsers

---

**Created**: November 12, 2025  
**Status**: ✅ Production Ready  
**Dependencies**: None (vanilla JavaScript)

