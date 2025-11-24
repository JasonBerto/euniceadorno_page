# Next Steps - Carousel Implementation ✅

## ✅ Issue Fixed!

The carousel wasn't appearing due to an undefined SCSS variable (`$primary-color`). This has been fixed by replacing it with `$heading-color`.

**Build Status**: ✅ Success  
**Server Status**: ✅ Running at http://localhost:4000

---

## 🎯 Next Steps

### 1. View the Carousel Demo (NOW!)

**Open your browser and visit:**
```
http://localhost:4000/carousel-demo/
```

Or click **"Carousel"** in the sidebar navigation.

**What you'll see:**
- ✨ 4 images auto-rotating every 4 seconds
- 🎯 Position indicator dots at the bottom
- ⬅️➡️ Navigation arrows (appear on hover)
- The carousel will pause when you hover over it

**Try these interactions:**
- Hover over the carousel to pause it
- Click the dots to jump to a specific slide
- Click the left/right arrows to navigate manually
- Use keyboard arrow keys
- On mobile: swipe left/right

---

### 2. Add Carousel to Your Homepage

**Option A: Replace current homepage with hero carousel**

Edit `index.html`:

```html
---
layout: default
---

<!-- Hero Carousel -->
<div style="margin-bottom: 60px;">
    {% include carousel.html 
       interval=6000
       images=site.data.hero_carousel 
    %}
</div>

<!-- Portfolio Grid Below -->
<div class="portfolio-grid">
    {% for project in site.portfolio %}
    <a href="{{ project.url | relative_url }}" class="portfolio-item">
        <div class="portfolio-image">
            {% if project.images and project.images.size > 0 %}
            <img src="{{ '/portfolio/' | append: project.slug | append: '/' | append: project.images[0] | relative_url }}" alt="{{ project.title }}">
            {% else %}
            <img src="{{ '/assets/images/placeholder.svg' | relative_url }}" alt="{{ project.title }}">
            {% endif %}
        </div>
        <div class="portfolio-overlay">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
        </div>
    </a>
    {% endfor %}
</div>
```

Create `_data/hero_carousel.yml`:
```yaml
- url: /assets/images/hero/portada04.jpg
  alt: Eunice Adorno Photography
  caption: Contemporary visual narratives

- url: /assets/images/hero/portada02.jpeg
  alt: Photography Work
  caption: Exploring identity and memory

- url: /assets/images/hero/portada05.JPG
  alt: Documentary Photography
  caption: Stories from Mexico
```

---

### 3. Use Carousel in Project Pages

Add carousel to individual projects. Edit `_portfolio/mujeres-flores.md`:

```markdown
---
layout: project
title: Mujeres Flores
description: A series exploring femininity and nature
year: 2023
slug: mujeres-flores
images:
  - "1_Mujeres_Flores_Eunice_Adorno.jpg"
  - "2_Mujeres_Flores_Eunice_Adorno.jpg"
  # ... other images
---

{% include carousel.html 
   interval=5000
   images=page.carousel_images 
%}

## About This Series

This series explores the intimate relationship between women and nature...
```

Then add in front matter:
```yaml
carousel_images:
  - url: /portfolio/mujeres-flores/1_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 1
  - url: /portfolio/mujeres-flores/2_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 2
  - url: /portfolio/mujeres-flores/3_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 3
```

---

### 4. Create Multiple Carousels

You can create different carousel sets for different purposes:

**_data/about_carousel.yml** - For About page:
```yaml
- url: /assets/images/exhibitions/venice.jpg
  alt: Venice Biennale 2023
  caption: 18th International Architecture Exhibition

- url: /assets/images/exhibitions/centro-imagen.jpg
  alt: Centro de la Imagen
  caption: XX Photography Biennial
```

**_data/testimonials_carousel.yml** - For testimonials:
```yaml
- url: /assets/images/testimonial-bg.jpg
  alt: Testimonial
  caption: "Exceptional artistry..." - Client Name
```

---

### 5. Customize the Carousel

**Change Timing:**
```liquid
{% include carousel.html interval=3000 images=site.data.my_carousel %}  <!-- 3 seconds -->
{% include carousel.html interval=7000 images=site.data.my_carousel %}  <!-- 7 seconds -->
{% include carousel.html interval=10000 images=site.data.my_carousel %} <!-- 10 seconds -->
```

**Change Aspect Ratio:**

Edit `assets/css/main.scss` around line 562:
```scss
.carousel-slides {
    aspect-ratio: 16 / 9;  // Current: Widescreen
    // aspect-ratio: 4 / 3;   // Standard
    // aspect-ratio: 1 / 1;   // Square
    // aspect-ratio: 21 / 9;  // Ultrawide
}
```

**Change Indicator Colors:**

Edit `assets/css/main.scss` around line 655:
```scss
.carousel-indicator {
    background-color: #d0d0d0;  // Inactive color
    
    &.active {
        background-color: #2c2c2c;  // Active color - change this!
    }
}
```

---

### 6. Remove Carousel from Navigation (Optional)

If you only want the carousel on specific pages and not in the main menu:

Edit `_layouts/default.html`:
```html
<nav class="main-nav">
    <ul>
        <li><a href="{{ '/' | relative_url }}">Projects</a></li>
        <!-- Remove or comment out this line: -->
        <!-- <li><a href="{{ '/carousel-demo/' | relative_url }}">Carousel</a></li> -->
        <li><a href="{{ '/bio/' | relative_url }}">About</a></li>
        <li><a href="{{ '/contact/' | relative_url }}">Contact</a></li>
    </ul>
</nav>
```

---

## 📚 Documentation Reference

All documentation is available:

1. **CAROUSEL_QUICK_START.md** - Fast setup guide
2. **CAROUSEL_DOCUMENTATION.md** - Complete reference manual
3. **CAROUSEL_EXAMPLES.md** - 10 real-world examples

---

## 🎨 Recommended Uses

### Best Places to Use the Carousel:

1. **Homepage Hero** - Welcome visitors with rotating featured work
2. **About Page** - Show exhibition photos or career highlights
3. **Project Pages** - Display project images in slideshow format
4. **Gallery Page** - Create dedicated gallery sections
5. **Behind-the-Scenes** - Show work-in-progress or process images

---

## ⚡ Performance Tips

1. **Optimize Images**: 
   - Compress to 80-85% quality
   - Resize to max 1920px width
   - Use JPG for photos, PNG for graphics

2. **Limit Slides**: 
   - Keep to 4-8 images per carousel
   - Multiple small carousels > one huge carousel

3. **Set Appropriate Intervals**:
   - Fast: 3-4 seconds (quick previews)
   - Standard: 5-7 seconds (recommended)
   - Slow: 8-10 seconds (detailed images)

---

## 🐛 Troubleshooting

### Carousel not showing?
1. Check browser console for errors (F12)
2. Verify image paths in data file
3. Ensure Jekyll rebuilt (check terminal)
4. Clear browser cache

### Images not loading?
1. Verify images exist at specified paths
2. Check for typos in file names
3. Ensure images aren't gitignored

### Not auto-advancing?
1. Check interval is set: `interval=5000`
2. Look for JavaScript errors in console
3. Verify multiple images in data file

---

## 🎯 Current Status

✅ Carousel component created  
✅ Styles added to main.scss  
✅ JavaScript functionality added  
✅ Demo page live at /carousel-demo/  
✅ Sample data file created  
✅ Navigation link added  
✅ SCSS errors fixed  
✅ Site building successfully  
✅ Server running at http://localhost:4000  

---

## 📍 Quick Actions

**View Demo:**
```
http://localhost:4000/carousel-demo/
```

**Test on Homepage:**
Replace `index.html` content with carousel + portfolio grid

**Add to About Page:**
Add carousel include to `pages/bio.md`

**Create New Carousel Set:**
Create new YAML file in `_data/` folder

---

## 💡 Pro Tips

1. **Use Descriptive Captions**: Help tell the story
2. **Keep It Simple**: Don't overwhelm with too many slides
3. **Test on Mobile**: Swipe gestures are essential
4. **Consistent Timing**: Use same interval throughout site
5. **High-Quality Images**: First impression matters

---

**Everything is ready! Open http://localhost:4000/carousel-demo/ to see it in action!** 🎉

