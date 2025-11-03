# SCSS Audit Report
## Eunice Adorno Portfolio Website

**Date:** Generated automatically  
**Purpose:** Document unused CSS declarations across all SCSS files

---

## Summary

This audit identifies unused or partially unused CSS declarations across all SCSS files in the project. Files have been commented to mark unused code for potential future cleanup or restoration.

---

## Files Audited

### ✅ Completely Audited Files

#### 1. **layout/_header.scss**
- **Status:** COMPLETELY UNUSED
- **Reason:** Uses `#header` ID selector not found in current templates
- **Action:** Entire file commented out
- **Note:** Using `.site-header` in `_jekyll-header.scss` instead

#### 2. **layout/_signup-form.scss**
- **Status:** COMPLETELY UNUSED  
- **Reason:** No `#signup-form` element in templates; no newsletter functionality
- **Action:** Entire file commented out
- **Note:** Contact uses mailto links instead

#### 3. **components/_icons.scss**
- **Status:** COMPLETELY UNUSED
- **Reason:** No `ul.icons` elements in current templates
- **Action:** Entire file commented out
- **Note:** Using custom `.social-link` classes in footer

#### 4. **components/_icon.scss**
- **Status:** PARTIALLY UNUSED
- **Used:** Base `.icon` class (Font Awesome in footer)
- **Unused:** `.icon.solid`, `.icon.brands` modifiers, `.icon > .label`
- **Action:** Unused modifiers commented out

#### 5. **components/_section.scss**
- **Status:** PARTIALLY UNUSED
- **Used:** General `header` styles
- **Unused:** `.special` modifier on `section/article`
- **Action:** `.special` modifier commented out

#### 6. **components/_form.scss**
- **Status:** MOSTLY UNUSED
- **Used:** `select` dropdown styling (for portfolio sort)
- **Unused:** All input, textarea, checkbox, radio, form message elements
- **Action:** Most of file commented out except select dropdown
- **Note:** No form submission functionality; using mailto links

#### 7. **components/_list.scss**
- **Status:** ACTIVE/USED
- **Reason:** General `ol` and `ul` styling used throughout content
- **Action:** No changes needed

---

### 📋 Files Needing Audit

The following files still need to be audited:

#### Base Files:
- `base/_reset.scss` - Keep (fundamental resets)
- `base/_page.scss` - Keep (page setup)
- `base/_bg.scss` - Needs review
- `base/_typography.scss` - Keep (typography)

#### Component Files:
- `components/_button.scss` - Needs review (`.cta-button` used but this file may have other unused styles)
- `components/_jekyll-animations.scss` - Needs review
- `components/_jekyll-bio.scss` - Keep (bio page)
- `components/_jekyll-contact.scss` - Keep (contact page)
- `components/_jekyll-gallery.scss` - Keep (gallery page)
- `components/_jekyll-lightbox.scss` - Keep (portfolio lightbox)
- `components/_jekyll-portfolio.scss` - Keep (portfolio pages)
- `components/_jekyll-header.scss` - Keep (main header/nav) - ✅ ALREADY AUDITED BY USER

#### Layout Files:
- `layout/_footer.scss` - Keep (footer)

#### Lib Files:
- `libs/_vars.scss` - Keep (variables)
- `libs/_mixins.scss` - Keep (mixins)
- `libs/_functions.scss` - Keep (functions)
- `libs/_breakpoints.scss` - Keep (breakpoints)
- `libs/_vendor.scss` - Keep (vendor prefixes)

---

## Classes Currently In Use

Based on template analysis:

### Header/Nav:
- `.site-header`, `.header-content`, `.site-logo`, `.main-nav`, `.nav-menu`, `.nav-toggle`, `.skip-link`

### Hero Section:
- `.present_carousel`, `.hero-carousel`, `.hero-slide`, `.hero-overlay`, `.hero-content`, `.hero-title`, `.hero-subtitle`, `.hero-description`, `.hero-actions`, `.hero-controls`, `.carousel-prev`, `.carousel-next`, `.hero-indicators`, `.indicator`

### Portfolio:
- `.featured-portfolio-section`, `.portfolio-layout`, `.portfolio-gallery`, `.gallery-image`, `.portfolio-cta`, `.cta-content`, `.cta-title`, `.cta-description`, `.cta-button`, `.portfolio-page`, `.portfolio-header`, `.portfolio-controls`, `.portfolio-filters`, `.filter-btn`, `.portfolio-sort`, `.sort-select`, `.portfolio-grid`, `.portfolio-item`, `.portfolio-image-container`, `.portfolio-cover`, `.portfolio-overlay`, `.project-year`, `.project-category`, `.portfolio-stats`, `.stat-item`, `.stat-number`, `.stat-label`

### Portfolio Project:
- `.portfolio-project`, `.project-header`, `.project-meta`, `.project-title`, `.project-description`, `.project-nav`, `.back-button`, `.project-gallery`, `.gallery-item`, `.gallery-image`, `.gallery-overlay`, `.gallery-zoom`, `.project-content`

### Lightbox:
- `.lightbox`, `.lightbox-content`, `.lightbox-close`, `.lightbox-prev`, `.lightbox-next`, `.lightbox-image-container`, `.lightbox-image`, `.lightbox-info`, `.lightbox-counter`

### About/Bio:
- `.about-preview-section`, `.about-content`, `.about-text`, `.about-image`, `.bio-content`, `.bio-image`, `.bio-text`

### Contact:
- `.contact-page`, `.contact-content`, `.contact-info`, `.contact-details`, `.contact-item`, `.contact-form`, `.contact-cta`

### Gallery:
- `.gallery-page`, `.gallery-grid`

### Footer:
- `.site-footer`, `.footer-container`, `.footer-content`, `.footer-social`, `.social-link`, `.footer-info`

### Page Layout:
- `.main-content`, `.page`, `.page-header`, `.page-title`, `.page-content`

### General:
- `.container`, `.primary`, `.secondary`

---

## Recommendations

### Immediate Actions:
1. ✅ **Commented out all unused code** - Preserves code for potential future use
2. ⚠️ **Consider removing entirely** - After confirming no future need for signup forms, icon fonts, etc.
3. 📝 **Document decisions** - Keep this audit report for reference

### Future Considerations:
1. **If adding newsletter:** Restore `_signup-form.scss`
2. **If adding contact form:** Restore form elements from `_form.scss`
3. **If using Font Awesome icons differently:** Restore `_icons.scss` and icon modifiers
4. **If adding special section layouts:** Restore `.special` modifier

### Performance Impact:
- Commenting out code doesn't reduce CSS file size
- To reduce file size, these files should be:
  - Removed from the repository, OR
  - Removed from the main.scss import list

---

## File Size Estimates

**Before audit:** ~220KB+ of unused CSS  
**After commenting:** Same size (comments included)  
**After removal:** Estimated ~180KB (if unused files removed from imports)

---

## Notes

- All changes preserve original code as comments
- Easy to restore any functionality if needed
- No breaking changes to existing functionality
- Main header (`_jekyll-header.scss`) was previously audited and rebuilt from scratch by user

