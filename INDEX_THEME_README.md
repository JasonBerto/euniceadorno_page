# Index Theme - Implementation Guide

This site has been refactored to use the **Index Jekyll Theme** - a minimal, fixed sidebar grid portfolio theme inspired by [https://index.jekyllthemes.io/](https://index.jekyllthemes.io/).

## Theme Features

✨ **Fixed Sidebar Navigation** - Clean, always-visible navigation that stays in place as you scroll
📱 **Fully Responsive** - Adapts beautifully from mobile to desktop
🎨 **Grid Portfolio Layout** - Modern masonry-style grid with hover overlays
⚡ **Fast & Minimal** - Lightweight design with no unnecessary dependencies
🖼️ **Project-Focused** - Designed specifically for showcasing photography and visual work

## Site Structure

```
/
├── _layouts/
│   ├── default.html    # Main layout with fixed sidebar
│   ├── page.html       # For static pages (About, Contact)
│   └── project.html    # For individual portfolio projects
├── pages/
│   ├── bio.md          # About page
│   └── contact.md      # Contact page
├── portfolio/
│   ├── desandar.md
│   ├── mujeres-flores.md
│   └── octubre-rojo.md
├── assets/
│   ├── css/
│   │   └── main.scss   # All theme styles (minimal, self-contained)
│   └── images/
└── index.html          # Homepage with portfolio grid
```

## How to Add New Projects

1. Create a new markdown file in the `portfolio/` directory:

```markdown
---
layout: project
title: Your Project Title
description: A brief description of the project
year: 2024
slug: your-project-slug
images:
  - "image1.jpg"
  - "image2.jpg"
  - "image3.jpg"
---

Your project description goes here. This content will appear below the images.
```

2. Create a folder in `/portfolio/` with the same name as your `slug`
3. Place your images in that folder
4. The first image in the `images` array will be used as the cover on the homepage grid

## Customization

### Colors & Typography

Edit `/assets/css/main.scss` to customize:

```scss
// Variables at the top of the file
$sidebar-width: 280px;
$primary-color: #000;
$background-color: #fff;
$text-color: #333;
$border-color: #e0e0e0;
$overlay-color: rgba(0, 0, 0, 0.8);
$transition-speed: 0.3s;
```

### Navigation Links

Edit `_layouts/default.html` to modify the sidebar navigation:

```html
<nav class="main-nav">
    <ul>
        <li><a href="{{ '/' | relative_url }}">Projects</a></li>
        <li><a href="{{ '/bio/' | relative_url }}">About</a></li>
        <li><a href="{{ '/contact/' | relative_url }}">Contact</a></li>
    </ul>
</nav>
```

### Site Title & Metadata

Edit `_config.yml`:

```yaml
title: "Eunice Adorno"
description: "Photography and visual narratives"
author: "Eunice Adorno"
url: "https://euniceadorno.com/"
```

## Development

```bash
# Install dependencies
bundle install

# Run local server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

The site will be available at `http://localhost:4000`

## Key Design Principles

1. **Content First** - The grid layout puts your visual work front and center
2. **Minimal Navigation** - Fixed sidebar keeps navigation accessible without being intrusive
3. **Clean Typography** - System fonts ensure fast loading and great readability
4. **Responsive Grid** - Automatically adjusts column count based on screen size
5. **Hover Interactions** - Smooth transitions and overlays provide visual feedback

## Responsive Breakpoints

- **Desktop (1024px+)**: 280px sidebar, multi-column grid
- **Tablet (768px - 1023px)**: 240px sidebar, adjusted grid
- **Mobile (< 768px)**: Horizontal navigation bar, single-column grid

## Performance Tips

- Optimize images before uploading (recommended max width: 1920px)
- Use JPG for photographs, PNG for graphics with transparency
- Consider lazy loading for projects with many images
- The theme includes compressed CSS for faster loading

## Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

This implementation is inspired by the Index theme from [Jekyll Themes](https://index.jekyllthemes.io/).

## Support

For questions or issues with the theme, refer to the [Jekyll documentation](https://jekyllrb.com/docs/).

---

**Current Theme Version**: 1.0 (November 2025)

