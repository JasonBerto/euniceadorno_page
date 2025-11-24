# Image Carousel - Usage Examples

## Example 1: Simple Carousel

The most basic implementation:

```liquid
{% include carousel.html 
   images=site.data.carousel_images 
%}
```

This uses:
- Default interval: 5000ms (5 seconds)
- Images from `_data/carousel_images.yml`

## Example 2: Custom Timing

Change how fast slides advance:

```liquid
{% include carousel.html 
   interval=3000
   images=site.data.carousel_images 
%}
```

Slides change every 3 seconds.

## Example 3: Homepage Hero Carousel

Replace `index.html` with:

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
  alt: Photography Portfolio
  caption: Exploring identity and memory

- url: /assets/images/hero/portada05.JPG
  alt: Documentary Work
  caption: Stories from Mexico
```

## Example 4: Project Gallery Carousel

Add to any project page (e.g., `_portfolio/mujeres-flores.md`):

```markdown
---
layout: project
title: Mujeres Flores
description: A series exploring femininity and nature
year: 2023
slug: mujeres-flores
carousel_images:
  - url: /portfolio/mujeres-flores/1_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 1
  - url: /portfolio/mujeres-flores/2_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 2
  - url: /portfolio/mujeres-flores/3_Mujeres_Flores_Eunice_Adorno.jpg
    alt: Mujeres Flores 3
---

{% include carousel.html 
   interval=5000
   images=page.carousel_images 
%}

## About This Series

This series explores the intimate relationship between women and nature...
```

## Example 5: Multiple Carousels on One Page

```markdown
---
layout: page
title: Galleries
---

# My Photo Galleries

## Urban Photography

{% include carousel.html 
   interval=4000
   images=site.data.urban_carousel 
%}

Urban scenes from around the world.

---

## Nature Photography

{% include carousel.html 
   interval=6000
   images=site.data.nature_carousel 
%}

Landscapes and natural beauty.

---

## Portrait Photography

{% include carousel.html 
   interval=5000
   images=site.data.portrait_carousel 
%}

Character studies and portraits.
```

## Example 6: Carousel in About Page

```markdown
---
layout: page
title: About
permalink: /bio/
---

# Eunice Adorno

**Mexico City (1982)**

{% include carousel.html 
   interval=7000
   images=site.data.about_carousel 
%}

Su trabajo abarca desde la fotografía documental...
```

## Example 7: Full-Width Carousel

For a full-width hero carousel, create custom CSS:

```scss
// Add to assets/css/main.scss
.hero-carousel {
    margin-left: -60px;
    margin-right: -60px;
    margin-bottom: 60px;
    
    .image-carousel {
        max-width: none;
        
        .carousel-slides {
            aspect-ratio: 21 / 9; // Ultrawide
        }
    }
}

@media (max-width: 768px) {
    .hero-carousel {
        margin-left: -20px;
        margin-right: -20px;
        
        .carousel-slides {
            aspect-ratio: 16 / 9;
        }
    }
}
```

Then use:
```html
<div class="hero-carousel">
    {% include carousel.html 
       interval=6000
       images=site.data.hero_images 
    %}
</div>
```

## Example 8: Testimonials Carousel

For text-based slides, modify the carousel data:

```yaml
# _data/testimonials.yml
- url: /assets/images/testimonial-bg.jpg
  alt: Client testimonial
  caption: "Working with Eunice was transformative. Her vision brought our story to life." - Client A

- url: /assets/images/testimonial-bg2.jpg
  alt: Client testimonial
  caption: "Exceptional artistry and professionalism. Highly recommended!" - Client B
```

## Example 9: Before/After Carousel

```yaml
# _data/before_after.yml
- url: /assets/images/before1.jpg
  alt: Before restoration
  caption: Before

- url: /assets/images/after1.jpg
  alt: After restoration
  caption: After

- url: /assets/images/before2.jpg
  alt: Before restoration
  caption: Before

- url: /assets/images/after2.jpg
  alt: After restoration
  caption: After
```

## Example 10: Exhibition Carousel

For showcasing exhibitions:

```yaml
# _data/exhibitions.yml
- url: /assets/images/exhibitions/venice-biennale.jpg
  alt: Venice Biennale
  caption: 18th International Architecture Exhibition, Venice 2023

- url: /assets/images/exhibitions/centro-imagen.jpg
  alt: Centro de la Imagen
  caption: XX Photography Biennial, Mexico City 2023

- url: /assets/images/exhibitions/netherlands.jpg
  alt: World Press Photo
  caption: Joop Swart Masterclass, Netherlands 2011
```

Use in About page:
```markdown
## Recent Exhibitions

{% include carousel.html 
   interval=8000
   images=site.data.exhibitions 
%}
```

## Data File Templates

### Basic Template
```yaml
- url: /path/to/image.jpg
  alt: Description
  caption: Optional caption
```

### Hero Template
```yaml
- url: /assets/images/hero/image1.jpg
  alt: Descriptive alt text
  caption: Main headline or tagline

- url: /assets/images/hero/image2.jpg
  alt: Descriptive alt text
  caption: Secondary message
```

### Gallery Template
```yaml
- url: /assets/images/gallery/photo1.jpg
  alt: Photo 1 title
  # No caption for clean gallery view

- url: /assets/images/gallery/photo2.jpg
  alt: Photo 2 title

- url: /assets/images/gallery/photo3.jpg
  alt: Photo 3 title
```

## Tips for Best Results

1. **Image Sizes**: Use consistent dimensions (e.g., 1920×1080)
2. **Optimization**: Compress images to 80-85% quality
3. **Alt Text**: Always include descriptive alt text
4. **Captions**: Keep captions concise (1-2 lines)
5. **Slide Count**: 4-8 slides works best
6. **Timing**: 5-7 seconds per slide is optimal
7. **Aspect Ratio**: Match to your content (16:9 for landscape, 4:3 for standard)

## Common Intervals

```liquid
interval=3000   # Fast (3 seconds) - good for quick previews
interval=5000   # Standard (5 seconds) - default, works well
interval=7000   # Relaxed (7 seconds) - for detailed images
interval=10000  # Slow (10 seconds) - for text-heavy slides
```

---

**More Examples**: See `CAROUSEL_DOCUMENTATION.md` for advanced usage  
**Quick Start**: See `CAROUSEL_QUICK_START.md` for basic setup  
**Demo**: Visit http://localhost:4000/carousel-demo/

