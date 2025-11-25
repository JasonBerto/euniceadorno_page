# Eunice Adorno Photography Portfolio

A minimal, elegant photography portfolio built with Jekyll, featuring a fixed sidebar navigation and grid-based project display. Based on the [Index theme](https://index.jekyllthemes.io/) design philosophy.

## 🌟 Features

- **Fixed Sidebar Navigation** - Always-visible navigation with clean, minimal design
- **Responsive Grid Layout** - Automatically adjusts portfolio grid based on screen size
- **Hover Overlays** - Interactive project previews with smooth transitions
- **Mobile-First Design** - Optimized for all devices from mobile to desktop
- **Fast & Lightweight** - Minimal dependencies, compressed CSS, system fonts
- **SEO Optimized** - Built-in SEO tags and sitemap generation

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7 or higher
- Bundler gem

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/euniceadorno_page.git
cd euniceadorno_page

# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Open in browser
# http://localhost:4000
```

## 📁 Project Structure

```
euniceadorno_page/
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base layout with sidebar
│   ├── page.html           # Static pages (About, Contact)
│   └── project.html        # Individual portfolio projects
├── pages/                  # Site pages
│   ├── bio.md              # About page
│   └── contact.md          # Contact page
├── portfolio/              # Portfolio projects
│   ├── desandar.md
│   ├── mujeres-flores.md
│   └── octubre-rojo.md
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.scss      # All theme styles
│   ├── js/
│   │   └── main.js        # Minimal JavaScript
│   └── images/            # Images organized by project
└── index.html             # Homepage with portfolio grid
```

## 🎨 Adding New Projects

### 1. Create Project File

Create a new markdown file in the `portfolio/` directory:

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

### 2. Add Project Images

1. Create a folder: `/portfolio/[slug]/`
2. Add your images to this folder
3. The first image in the `images` array will be used as the cover on the homepage

Example:
```
/portfolio/
  └── your-project-slug/
      ├── image1.jpg  (← cover image)
      ├── image2.jpg
      └── image3.jpg
```

## ⚙️ Customization

### Site Configuration

Edit `_config.yml` to customize site settings:

```yaml
title: "Your Name"
description: "Your site description"
email: "your.email@example.com"
url: "https://yoursite.com"
```

### Styling

Edit `/assets/css/main.scss` to customize colors and design:

```scss
// Change these variables
$sidebar-width: 280px;
$primary-color: #000;
$background-color: #fff;
$text-color: #333;
```

### Navigation

Edit `_layouts/default.html` to modify sidebar navigation:

```html
<nav class="main-nav">
    <ul>
        <li><a href="/">Projects</a></li>
        <li><a href="/bio/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
    </ul>
</nav>
```

## 📱 Responsive Design

The theme adapts to different screen sizes:

- **Desktop (1024px+)**: Full sidebar (280px) with multi-column grid
- **Tablet (768px - 1023px)**: Smaller sidebar (240px) with adjusted grid
- **Mobile (< 768px)**: Horizontal navigation bar with single-column grid

## 🚀 Deployment

### GitHub Pages

1. Push to your repository:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS records with your domain provider

### Manual Deployment

```bash
# Build the site
bundle exec jekyll build

# Deploy _site/ folder to your server
rsync -av _site/ user@server:/path/to/website/
```

## 🎯 Performance

The Index theme is optimized for performance:

- ✅ **Minimal Dependencies** - No jQuery or heavy frameworks
- ✅ **Compressed CSS** - Single minified stylesheet
- ✅ **System Fonts** - No web font loading delays
- ✅ **Lazy Loading Ready** - Easy to implement for images
- ✅ **Fast Loading** - Optimized for Core Web Vitals

## 📖 Documentation

- **Theme Documentation**: See `INDEX_THEME_README.md` for detailed theme guide
- **Migration Summary**: See `THEME_MIGRATION_SUMMARY.md` for implementation details
- **Jekyll Docs**: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

## 🛠️ Development

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Eunice Adorno**
- Instagram: [@euadorno](https://www.instagram.com/euadorno/)
- Website: [euniceadorno.com](https://euniceadorno.com/)

## 🙏 Credits

- Theme inspired by: [Index Jekyll Theme](https://index.jekyllthemes.io/)
- Built with: [Jekyll](https://jekyllrb.com/)
- Hosted on: [GitHub Pages](https://pages.github.com/)

---

**Theme Version**: 1.0 (November 2025)  
Built for photographers who want to showcase their work with minimal distraction.
