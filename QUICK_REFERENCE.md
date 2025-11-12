# Index Theme - Quick Reference Guide

## 🚀 Development Server

```bash
bundle exec jekyll serve --livereload
```

**Site URL**: http://localhost:4000  
**LiveReload**: http://localhost:35729

## 📂 File Locations

### To Edit Content
- **Homepage Grid**: Automatically generated from `/portfolio/*.md` files
- **About Page**: `/pages/bio.md`
- **Contact Page**: `/pages/contact.md`
- **Projects**: `/portfolio/[project-name].md`

### To Edit Design
- **All Styles**: `/assets/css/main.scss`
- **Sidebar Navigation**: `/_layouts/default.html`
- **Project Layout**: `/_layouts/project.html`
- **Page Layout**: `/_layouts/page.html`

### Site Configuration
- **Settings**: `/_config.yml`

## ➕ Adding a New Project

### Step 1: Create Project File
Create `/portfolio/new-project.md`:

```yaml
---
layout: project
title: Project Title
description: Short description for the grid
year: 2024
slug: new-project
images:
  - "photo1.jpg"
  - "photo2.jpg"
---

Your detailed project description here.
```

### Step 2: Add Images
1. Create folder: `/portfolio/new-project/`
2. Add images: `photo1.jpg`, `photo2.jpg`, etc.
3. First image becomes the grid thumbnail

### Step 3: Preview
The project automatically appears on the homepage grid!

## 🎨 Quick Customizations

### Change Sidebar Color
In `/assets/css/main.scss`:
```scss
$primary-color: #000;  // Change to your color
```

### Change Sidebar Width
```scss
$sidebar-width: 280px;  // Adjust width
```

### Add Navigation Link
In `/_layouts/default.html`:
```html
<nav class="main-nav">
    <ul>
        <li><a href="/">Projects</a></li>
        <li><a href="/bio/">About</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/new-page/">New Page</a></li> <!-- ADD HERE -->
    </ul>
</nav>
```

### Change Site Title
In `/_config.yml`:
```yaml
title: "Your Name"
description: "Your tagline"
```

## 🔍 Current Portfolio Items

1. **Mujeres Flores** - `/portfolio/mujeres-flores/` (10 images)
2. **Desandar** - `/portfolio/desandar/` (in development)
3. **Octubre Rojo** - `/portfolio/octubre-rojo/` (in development)

## 📱 View Your Site

- **Desktop**: http://localhost:4000
- **Mobile Simulation**: Use browser DevTools (F12) → Toggle device toolbar

## 🛑 Stop Server

Press `Ctrl + C` in the terminal

## 🔄 Rebuild Site

If changes don't appear:
```bash
bundle exec jekyll clean
bundle exec jekyll serve --livereload
```

## 📝 Project File Template

Copy this for new projects:

```markdown
---
layout: project
title: 
description: 
year: 2024
slug: 
images:
  - 
---

```

## 🎯 Common Tasks

### Update About Page
Edit: `/pages/bio.md`

### Update Contact Info
Edit: `/pages/contact.md`

### Change Footer Text
Edit: `/_layouts/default.html` (line ~24)

### Optimize Images
Recommended: Max width 1920px, JPG quality 85%

## 📊 Project Order

Projects appear on homepage in the order they're created in Jekyll's build process. To control order, add to front matter:

```yaml
order: 1  # Lower numbers appear first
```

Then update `index.html` to sort by order.

## 🌐 Going Live

### On GitHub Pages
1. Push to GitHub
2. Enable Pages in repo settings
3. Your site is live!

### On Custom Domain
1. Add `CNAME` file with domain
2. Point DNS to GitHub Pages
3. Enable HTTPS in settings

## 📚 Full Documentation

- **Theme Guide**: `INDEX_THEME_README.md`
- **Migration Details**: `THEME_MIGRATION_SUMMARY.md`
- **Main README**: `README.md`

---

**Need Help?** All theme files are documented with comments.

