# Footer Social Links - Added ✅

## What Was Added

Added Instagram and Email social links to the sidebar footer with elegant SVG icons.

## Location

**File**: `_layouts/default.html` (lines 24-37)

## Features

✅ **Instagram Icon** - Links to [@euadorno](https://www.instagram.com/euadorno/)  
✅ **Email Icon** - Opens mail client to euniceadorno.studio@gmail.com  
✅ **SVG Icons** - Clean, scalable vector graphics  
✅ **Hover Effects** - Icons lift up slightly on hover  
✅ **Accessible** - Includes aria-labels for screen readers  
✅ **Responsive** - Adapts beautifully on mobile devices  

## Design Details

### Desktop View
- Icons displayed above copyright text
- 15px spacing between icons
- 80% opacity by default, 100% on hover
- Subtle lift animation (2px) on hover
- White color matching sidebar theme

### Mobile View (< 768px)
- Social links move to the right side of horizontal nav
- Copyright text hidden to save space
- Icons remain fully functional

## Styling

**CSS Location**: `assets/css/main.scss` (lines 102-134, 426-436)

### Properties:
```scss
.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  
  a {
    opacity: 0.8;
    transition: opacity 0.3s, transform 0.3s;
    
    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
}
```

## How It Looks

### Desktop Sidebar Footer:
```
[Instagram Icon] [Email Icon]
© 2025 Eunice Adorno
```

### Mobile Navigation:
```
Eunice Adorno    Projects | About | Contact    [IG] [Email]
```

## Testing

All links tested and verified:
- ✅ Instagram opens in new tab
- ✅ Email opens mail client
- ✅ Hover effects work smoothly
- ✅ Mobile responsive layout working
- ✅ Icons scale properly
- ✅ Accessibility labels present

## Related Files

- `_layouts/default.html` - HTML structure
- `assets/css/main.scss` - Styling
- `_config.yml` - Site configuration (contains social URLs)

---

**Added**: November 12, 2025  
**Status**: ✅ Complete and Live

