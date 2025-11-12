## 🎯 QUICK START GUIDE - Barebones CSS

### ✅ RESET COMPLETE!

Your site now has **clean, minimal CSS** with NO animations or complex features.

---

## 📦 What You Have Now

### Files Changed:
1. **`assets/css/main.scss`** (75 lines) - Streamlined imports
2. **`assets/sass/components/_minimal.scss`** (200 lines) - Clean styles  
3. **`assets/js/main.js`** (45 lines) - Simple nav toggle

### Features Working:
- ✅ Header & navigation
- ✅ Mobile menu toggle
- ✅ Typography
- ✅ Basic layout
- ✅ Footer
- ✅ Buttons

### Features Removed:
- ❌ All animations
- ❌ Hero carousel
- ❌ Lightbox
- ❌ Portfolio filters
- ❌ Scroll effects

---

## 🚀 How to Add Features Back

### Step 1: Test Your Site
Start your Jekyll server and browse the site:
```bash
bundle exec jekyll serve
```

### Step 2: Add One Feature at a Time

In `assets/css/main.scss`, uncomment ONE line:

#### Add Portfolio Styles:
```scss
@import 'components/jekyll-portfolio';
```

#### Add Gallery Styles:
```scss
@import 'components/jekyll-gallery';
```

#### Add Bio Page Styles:
```scss
@import 'components/jekyll-bio';
```

#### Add Contact Page Styles:
```scss
@import 'components/jekyll-contact';
```

### Step 3: Check & Adjust
- Reload your site
- See what changed
- Keep or remove based on need

---

## 📝 Current CSS Structure

```
ACTIVE:
✅ libs/* - Functions, mixins, variables
✅ base/reset - CSS resets
✅ base/page - Page setup
✅ base/typography - Text styling
✅ components/minimal - NEW clean styles
✅ layout/footer - Footer only

COMMENTED OUT (Can enable):
❌ base/bg
❌ components/section
❌ components/jekyll-header (old complex version)
❌ components/jekyll-portfolio
❌ components/jekyll-gallery
❌ components/jekyll-contact
❌ components/jekyll-bio
❌ components/jekyll-lightbox
❌ components/jekyll-animations
```

---

## 🔧 Common Tasks

### Center a Button:
In your HTML, wrap in a div:
```html
<div style="text-align: center;">
    <a href="/portfolio" class="cta-button primary">View Portfolio</a>
</div>
```

Or add to `_minimal.scss`:
```scss
.text-center {
    text-align: center;
}
```

### Add Custom Section Styles:
Edit `assets/sass/components/_minimal.scss` and add:
```scss
.my-custom-section {
    padding: 4rem 0;
    background: #f5f5f5;
}
```

### Adjust Colors:
In `_minimal.scss`, find and change:
```scss
.cta-button.primary {
    background: #1e806b;  // Change this color
}
```

---

## 💡 Best Practices

1. **Start Simple** - Site works with minimal CSS
2. **Add Progressively** - One feature at a time
3. **Test After Each Change** - Reload and verify
4. **Keep What You Need** - Remove what you don't
5. **Document Changes** - Comment your additions

---

## 📁 Backup Location

All complex CSS backed up to:
```
_backup/css_complex/
├── components/       (all old SCSS files)
├── main.scss.backup  (old main file)
└── main.js.backup    (old JavaScript)
```

To restore everything:
```bash
cp _backup/css_complex/main.scss.backup assets/css/main.scss
```

---

## 🎨 Styling Philosophy

> Keep it simple until you need complexity.

- Minimal CSS = Faster load
- Easier to debug
- Easier to maintain
- Clear what each rule does
- No unused code

---

## ✅ Success!

Your site now has a **clean foundation**. Build from here, adding only what you actually need!

**Next:** Browse your site and decide what features to add back progressively.

