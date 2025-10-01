# Eunice Adorno Photography Portfolio

A modern, mobile-first photography portfolio built with Jekyll and GitHub Pages, featuring sophisticated animations, advanced interactions, and optimized performance.

## 🌟 Features

### **Modern Design**
- **Mobile-First**: Optimized for smartphone viewing
- **Responsive Layout**: Works seamlessly on all device sizes
- **Sophisticated Animations**: Scroll-triggered reveals and micro-interactions
- **Custom Cursor**: Desktop-only interactive cursor
- **Parallax Effects**: Immersive scroll experiences

### **Portfolio Management**
- **Lightbox Gallery**: Full-screen image viewing with navigation
- **Advanced Filtering**: Category and sorting options
- **Touch Gestures**: Swipe navigation for mobile
- **Keyboard Controls**: Arrow keys and Escape for accessibility
- **Image Optimization**: Lazy loading and performance monitoring

### **Performance & Accessibility**
- **Core Web Vitals**: Real-time performance monitoring
- **Lazy Loading**: Efficient image loading with Intersection Observer
- **Hardware Acceleration**: Smooth 60fps animations
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Touch-Friendly**: 44px minimum touch targets

## 🚀 Quick Start

### Prerequisites
- Ruby 2.7 or higher
- Bundler gem

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/euniceadorno/euniceadorno_page.git
cd euniceadorno_page
```

2. **Install dependencies**
```bash
bundle install
```

3. **Serve locally**
```bash
bundle exec jekyll serve
```

4. **Open in browser**
```
http://localhost:4000
```

## 📁 Project Structure

```
euniceadorno_page/
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── page.html           # Page layout
│   └── portfolio.html      # Portfolio layout
├── _includes/              # Reusable components
│   ├── header.html         # Navigation
│   └── footer.html         # Footer
├── _data/                  # Data files
│   └── portfolio.yml       # Portfolio projects
├── assets/                 # Static assets
│   ├── css/
│   │   └── main.scss      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript functionality
│   └── images/            # Images organized by category
├── pages/                  # Main site pages
├── portfolio/              # Individual portfolio projects
└── index.md               # Homepage
```

## 🎨 Customization

### Adding Portfolio Projects

1. **Add project data** to `_data/portfolio.yml`:
```yaml
projects:
  - title: "Project Name"
    slug: "project-slug"
    description: "Project description"
    year: 2023
    category: "portrait"
    cover_image: "cover.jpg"
    images:
      - "image1.jpg"
      - "image2.jpg"
    tags: ["tag1", "tag2"]
    location: "Mexico"
    equipment: "35mm Film"
```

2. **Create project page** in `portfolio/project-slug.md`:
```markdown
---
layout: portfolio
title: Project Name
description: Project description
year: 2023
images:
  - "image1.jpg"
  - "image2.jpg"
permalink: /portfolio/project-slug/
---

Project description and content here.
```

### Customizing Animations

The site uses a sophisticated animation system with data attributes:

```html
<!-- Scroll-triggered animations -->
<div data-animate="fade-up" data-delay="200">
  Content that fades up when scrolled into view
</div>

<!-- Staggered animations -->
<div data-animate="stagger">
  <div data-stagger-item>Item 1</div>
  <div data-stagger-item>Item 2</div>
</div>

<!-- Parallax effects -->
<div data-parallax="0.5">
  Content that moves at 50% scroll speed
</div>
```

### Available Animation Types
- `fade-up`: Slides up and fades in
- `fade-left`: Slides from left and fades in
- `fade-right`: Slides from right and fades in
- `scale-up`: Scales up and fades in
- `slide-up`: Slides up from bottom
- `stagger`: Animates children sequentially

## 🎯 Performance Features

### **Image Optimization**
- **Lazy Loading**: Images load only when needed
- **WebP Support**: Modern image formats with fallbacks
- **Responsive Images**: Multiple sizes for different screens
- **Loading States**: Skeleton screens and placeholders

### **Animation Performance**
- **Hardware Acceleration**: Uses transform and opacity
- **RequestAnimationFrame**: Smooth 60fps animations
- **Intersection Observer**: Efficient scroll detection
- **Cubic-Bezier Easing**: Natural animation curves

### **Core Web Vitals Monitoring**
- **LCP**: Largest Contentful Paint tracking
- **FID**: First Input Delay monitoring
- **CLS**: Cumulative Layout Shift measurement
- **Real-time Metrics**: Performance dashboard

## 📱 Mobile Features

### **Touch Interactions**
- **Swipe Gestures**: Navigate galleries with swipes
- **Haptic Feedback**: Vibration on supported devices
- **Touch Feedback**: Visual response to touch
- **Pinch to Zoom**: Image zoom functionality

### **Mobile Optimizations**
- **Reduced Motion**: Respects user preferences
- **Touch Targets**: Minimum 44px for accessibility
- **Viewport Meta**: Proper mobile scaling
- **Fast Tap**: Eliminates click delays

## 🔧 Development

### **Local Development**
```bash
# Install dependencies
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

### **Adding New Features**

1. **CSS**: Add styles to `assets/css/main.scss`
2. **JavaScript**: Add functionality to `assets/js/main.js`
3. **Layouts**: Create new layouts in `_layouts/`
4. **Components**: Add reusable components to `_includes/`

### **Testing**

```bash
# Test Jekyll build
bundle exec jekyll build

# Validate HTML
html-validate _site/

# Check accessibility
axe _site/

# Performance audit
lighthouse _site/index.html
```

## 🚀 Deployment

### **GitHub Pages**

1. **Push to main branch**
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder

3. **Custom Domain** (Optional)
   - Add `CNAME` file with your domain
   - Configure DNS records

### **Manual Deployment**

```bash
# Build site
bundle exec jekyll build

# Deploy _site/ folder to your web server
rsync -av _site/ user@server:/path/to/website/
```

## 📊 Analytics & SEO

### **Built-in SEO**
- **Meta Tags**: Automatic meta tag generation
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic XML sitemap generation
- **Structured Data**: JSON-LD for search engines

### **Performance Monitoring**
- **Core Web Vitals**: Real-time performance tracking
- **Image Loading**: Load time monitoring
- **Animation Performance**: FPS tracking
- **Memory Usage**: Resource monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: euniceadorno.studio@gmail.com
- **Instagram**: [@euadorno](https://www.instagram.com/euadorno/)
- **Website**: [euniceadorno.github.io/euniceadorno_page](https://euniceadorno.github.io/euniceadorno_page)

## 🙏 Acknowledgments

- **Jekyll**: Static site generator
- **GitHub Pages**: Hosting platform
- **Font Awesome**: Icons
- **Modern CSS**: Advanced styling techniques
- **Web Standards**: Accessibility and performance

---

Built with ❤️ for photographers who want to showcase their work beautifully.