// Enhanced Mobile Navigation with Sophisticated Animations
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.site-header');
    
    // Header scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Enhanced hamburger animation
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) {
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        span.style.backgroundColor = '#666';
                    }
                    if (index === 1) {
                        span.style.opacity = '0';
                        span.style.transform = 'scale(0)';
                    }
                    if (index === 2) {
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                        span.style.backgroundColor = '#666';
                    }
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                    span.style.backgroundColor = '';
                }
            });
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on links with smooth animation
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset hamburger animation with delay
                setTimeout(() => {
                    const spans = navToggle.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.transform = '';
                        span.style.opacity = '';
                        span.style.backgroundColor = '';
                    });
                }, 300);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                    span.style.backgroundColor = '';
                });
            }
        });
    }
});

// Enhanced Portfolio Filtering and Sorting
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const sortSelect = document.getElementById('sort-select');
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    let currentFilter = 'all';
    let currentSort = 'year-desc';
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = filter;
            applyFiltersAndSort();
        });
    });
    
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            applyFiltersAndSort();
        });
    }
    
    function applyFiltersAndSort() {
        let filteredItems = Array.from(portfolioItems);
        
        // Apply filter
        if (currentFilter !== 'all') {
            filteredItems = filteredItems.filter(item => 
                item.getAttribute('data-category') === currentFilter
            );
        }
        
        // Apply sort
        filteredItems.sort((a, b) => {
            switch (currentSort) {
                case 'year-desc':
                    return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
                case 'year-asc':
                    return parseInt(a.getAttribute('data-year')) - parseInt(b.getAttribute('data-year'));
                case 'title-asc':
                    return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
                case 'title-desc':
                    return b.getAttribute('data-title').localeCompare(a.getAttribute('data-title'));
                default:
                    return 0;
            }
        });
        
        // Animate items
        animatePortfolioItems(filteredItems);
    }
    
    function animatePortfolioItems(items) {
        // Hide all items first
        portfolioItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
        
        // Show filtered items with stagger
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Update grid layout
        setTimeout(() => {
            portfolioGrid.style.display = 'grid';
        }, items.length * 100 + 200);
    }
});

// Lightbox Gallery Functionality
class LightboxGallery {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.querySelector('.lightbox-image');
        this.lightboxCounter = document.querySelector('.lightbox-counter');
        this.closeBtn = document.querySelector('.lightbox-close');
        this.prevBtn = document.querySelector('.lightbox-prev');
        this.nextBtn = document.querySelector('.lightbox-next');
        
        this.images = [];
        this.currentIndex = 0;
        
        this.init();
    }
    
    init() {
        // Collect all gallery images
        const galleryItems = document.querySelectorAll('.gallery-item');
        this.images = Array.from(galleryItems).map(item => ({
            src: item.querySelector('.gallery-image').src,
            alt: item.querySelector('.gallery-image').alt
        }));
        
        // Add click listeners to gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => this.openLightbox(index));
        });
        
        // Add click listeners to zoom buttons
        document.querySelectorAll('.gallery-zoom').forEach((btn, index) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.openLightbox(index);
            });
        });
        
        // Lightbox controls
        this.closeBtn.addEventListener('click', () => this.closeLightbox());
        this.prevBtn.addEventListener('click', () => this.previousImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
        
        // Touch gestures for mobile
        this.addTouchGestures();
    }
    
    openLightbox(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
    
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    updateImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;
        this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    }
    
    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
        this.animateImageChange();
    }
    
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
        this.animateImageChange();
    }
    
    animateImageChange() {
        this.lightboxImage.style.opacity = '0';
        setTimeout(() => {
            this.lightboxImage.style.opacity = '1';
        }, 150);
    }
    
    addTouchGestures() {
        let startX = 0;
        let startY = 0;
        
        this.lightbox.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });
        
        this.lightbox.addEventListener('touchend', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Only process horizontal swipes
            if (Math.abs(diffY) > Math.abs(diffX)) return;
            
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    this.nextImage();
                } else {
                    this.previousImage();
                }
            }
        }, { passive: true });
    }
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.lightbox')) {
        new LightboxGallery();
    }
});

// Advanced Image Lazy Loading with Intersection Observer
class ImageLazyLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
            
            this.observeImages();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }
    
    observeImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => this.imageObserver.observe(img));
    }
    
    loadImage(img) {
        const src = img.getAttribute('data-src') || img.src;
        
        // Create a new image to preload
        const newImg = new Image();
        newImg.onload = () => {
            img.src = src;
            img.classList.add('loaded');
            img.style.opacity = '1';
        };
        newImg.onerror = () => {
            img.classList.add('error');
        };
        newImg.src = src;
    }
    
    loadAllImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => this.loadImage(img));
    }
}

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }
    
    init() {
        // Monitor Core Web Vitals
        this.measureLCP();
        this.measureFID();
        this.measureCLS();
        
        // Monitor image loading performance
        this.monitorImagePerformance();
    }
    
    measureLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.metrics.lcp = lastEntry.startTime;
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }
    
    measureFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    this.metrics.fid = entry.processingStart - entry.startTime;
                });
            });
            observer.observe({ entryTypes: ['first-input'] });
        }
    }
    
    measureCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                this.metrics.cls = clsValue;
            });
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }
    
    monitorImagePerformance() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('load', () => {
                const loadTime = performance.now();
                console.log(`Image loaded in ${loadTime.toFixed(2)}ms:`, img.src);
            });
        });
    }
}

// Advanced Scroll-Triggered Animations System
class ScrollAnimations {
    constructor() {
        this.animatedElements = new Set();
        this.intersectionObserver = null;
        this.scrollProgress = 0;
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupScrollProgress();
        this.setupParallaxEffects();
        this.setupRevealAnimations();
    }
    
    setupIntersectionObserver() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements with animation classes
        document.querySelectorAll('[data-animate]').forEach(el => {
            this.intersectionObserver.observe(el);
        });
    }
    
    animateElement(element) {
        if (this.animatedElements.has(element)) return;
        
        this.animatedElements.add(element);
        const animationType = element.getAttribute('data-animate');
        const delay = element.getAttribute('data-delay') || 0;
        
        setTimeout(() => {
            element.classList.add('animate-in');
            this.triggerCustomAnimation(element, animationType);
        }, delay);
    }
    
    triggerCustomAnimation(element, type) {
        switch (type) {
            case 'fade-up':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                break;
            case 'fade-left':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
            case 'fade-right':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
            case 'scale-up':
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
                break;
            case 'slide-up':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                break;
            case 'stagger':
                this.animateStaggeredChildren(element);
                break;
        }
    }
    
    animateStaggeredChildren(element) {
        const children = element.querySelectorAll('[data-stagger-item]');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.style.transform = 'translateY(0)';
                child.style.opacity = '1';
            }, index * 100);
        });
    }
    
    setupScrollProgress() {
        let ticking = false;
        
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = scrollTop / docHeight;
            
            // Update progress indicators
            document.querySelectorAll('.scroll-progress').forEach(el => {
                el.style.width = `${this.scrollProgress * 100}%`;
            });
            
            // Update parallax elements
            this.updateParallaxElements();
            
            ticking = false;
        };
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        });
    }
    
    setupParallaxEffects() {
        this.parallaxElements = document.querySelectorAll('[data-parallax]');
    }
    
    updateParallaxElements() {
        this.parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = -(this.scrollProgress * window.innerHeight * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    setupRevealAnimations() {
        // Add reveal animations to sections
        document.querySelectorAll('section, .portfolio-item, .gallery-item').forEach((el, index) => {
            el.setAttribute('data-animate', 'fade-up');
            el.setAttribute('data-delay', index * 100);
        });
    }
}

// Advanced Micro-Interactions System
class MicroInteractions {
    constructor() {
        this.cursor = null;
        this.init();
    }
    
    init() {
        this.setupCustomCursor();
        this.setupHoverEffects();
        this.setupClickAnimations();
        this.setupFormInteractions();
        this.setupPageTransitions();
    }
    
    setupCustomCursor() {
        // Create custom cursor for desktop
        if (window.innerWidth > 768) {
            this.cursor = document.createElement('div');
            this.cursor.className = 'custom-cursor';
            document.body.appendChild(this.cursor);
            
            document.addEventListener('mousemove', (e) => {
                this.cursor.style.left = e.clientX + 'px';
                this.cursor.style.top = e.clientY + 'px';
            });
            
            // Cursor interactions
            document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    this.cursor.classList.add('hover');
                });
                
                el.addEventListener('mouseleave', () => {
                    this.cursor.classList.remove('hover');
                });
            });
        }
    }
    
    setupHoverEffects() {
        // Enhanced hover effects for portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.createHoverParticles(item);
            });
            
            item.addEventListener('mouseleave', () => {
                this.removeHoverParticles(item);
            });
        });
        
        // Text hover effects
        document.querySelectorAll('h1, h2, h3').forEach(heading => {
            heading.addEventListener('mouseenter', () => {
                this.animateText(heading);
            });
        });
    }
    
    createHoverParticles(element) {
        const particles = [];
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.className = 'hover-particle';
            particle.style.position = 'absolute';
            particle.style.left = Math.random() * rect.width + 'px';
            particle.style.top = Math.random() * rect.height + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'rgba(255, 255, 255, 0.8)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.animation = `particleFloat ${1 + Math.random() * 2}s ease-out forwards`;
            
            element.appendChild(particle);
            particles.push(particle);
        }
        
        // Remove particles after animation
        setTimeout(() => {
            particles.forEach(particle => particle.remove());
        }, 3000);
    }
    
    removeHoverParticles(element) {
        element.querySelectorAll('.hover-particle').forEach(particle => {
            particle.remove();
        });
    }
    
    animateText(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            span.style.opacity = '0';
            span.style.transition = 'all 0.3s ease';
            
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.transform = 'translateY(0)';
                span.style.opacity = '1';
            }, index * 50);
        });
    }
    
    setupClickAnimations() {
        // Ripple effect for all clickable elements
        document.querySelectorAll('button, .cta-button, .portfolio-item').forEach(element => {
            element.addEventListener('click', (e) => {
                this.createRippleEffect(e, element);
            });
        });
    }
    
    createRippleEffect(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    setupFormInteractions() {
        // Enhanced form interactions
        document.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('focus', () => {
                field.parentElement.classList.add('focused');
                this.animateFieldLabel(field);
            });
            
            field.addEventListener('blur', () => {
                if (!field.value) {
                    field.parentElement.classList.remove('focused');
                }
            });
            
            field.addEventListener('input', () => {
                this.validateField(field);
            });
        });
    }
    
    animateFieldLabel(field) {
        const label = field.previousElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.style.transform = 'translateY(-20px) scale(0.8)';
            label.style.color = '#333';
        }
    }
    
    validateField(field) {
        const isValid = field.checkValidity();
        field.classList.toggle('valid', isValid);
        field.classList.toggle('invalid', !isValid);
        
        if (isValid) {
            this.showFieldSuccess(field);
        }
    }
    
    showFieldSuccess(field) {
        const successIcon = document.createElement('div');
        successIcon.className = 'field-success';
        successIcon.innerHTML = '✓';
        successIcon.style.position = 'absolute';
        successIcon.style.right = '10px';
        successIcon.style.top = '50%';
        successIcon.style.transform = 'translateY(-50%)';
        successIcon.style.color = '#4CAF50';
        successIcon.style.fontWeight = 'bold';
        successIcon.style.animation = 'fadeInScale 0.3s ease';
        
        field.parentElement.appendChild(successIcon);
        
        setTimeout(() => {
            successIcon.remove();
        }, 2000);
    }
    
    setupPageTransitions() {
        // Smooth page transitions
        document.querySelectorAll('a[href^="/"], a[href^="./"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.transitionToPage(link.href);
            });
        });
    }
    
    transitionToPage(url) {
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = '#333';
        overlay.style.zIndex = '9999';
        overlay.style.transform = 'scaleX(0)';
        overlay.style.transformOrigin = 'left';
        overlay.style.transition = 'transform 0.5s ease-in-out';
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.transform = 'scaleX(1)';
        }, 10);
        
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }
}

// Initialize micro-interactions
const microInteractions = new MicroInteractions();

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Enhanced Touch Gestures and Swipe Functionality
class TouchGestureHandler {
    constructor() {
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.minSwipeDistance = 50;
        this.maxVerticalDistance = 100;
        
        this.init();
    }
    
    init() {
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
        this.touchStartY = e.changedTouches[0].screenY;
    }
    
    handleTouchMove(e) {
        // Add subtle parallax effect during swipe
        const currentX = e.changedTouches[0].screenX;
        const diffX = currentX - this.touchStartX;
        
        if (Math.abs(diffX) > 10) {
            document.body.style.transform = `translateX(${diffX * 0.1}px)`;
        }
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.touchEndY = e.changedTouches[0].screenY;
        
        // Reset body transform
        document.body.style.transform = '';
        
        this.handleSwipe();
    }
    
    handleSwipe() {
        const diffX = this.touchStartX - this.touchEndX;
        const diffY = this.touchStartY - this.touchEndY;
        
        // Only process horizontal swipes
        if (Math.abs(diffY) > this.maxVerticalDistance) return;
        
        if (Math.abs(diffX) > this.minSwipeDistance) {
            const direction = diffX > 0 ? 'left' : 'right';
            this.processSwipe(direction);
        }
    }
    
    processSwipe(direction) {
        // Add haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Handle portfolio navigation
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const currentActive = document.querySelector('.portfolio-item.active');
        
        if (portfolioItems.length > 0) {
            let currentIndex = 0;
            if (currentActive) {
                currentIndex = Array.from(portfolioItems).indexOf(currentActive);
            }
            
            let nextIndex;
            if (direction === 'left') {
                nextIndex = (currentIndex + 1) % portfolioItems.length;
            } else {
                nextIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
            }
            
            // Add visual feedback
            portfolioItems[nextIndex].style.transform = 'scale(1.05)';
            setTimeout(() => {
                portfolioItems[nextIndex].style.transform = '';
            }, 200);
        }
        
        // Handle gallery navigation
        this.handleGallerySwipe(direction);
    }
    
    handleGallerySwipe(direction) {
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (galleryItems.length === 0) return;
        
        const currentVisible = document.querySelector('.gallery-item.visible');
        let currentIndex = 0;
        
        if (currentVisible) {
            currentIndex = Array.from(galleryItems).indexOf(currentVisible);
        }
        
        let nextIndex;
        if (direction === 'left') {
            nextIndex = (currentIndex + 1) % galleryItems.length;
        } else {
            nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        }
        
        // Animate gallery transition
        galleryItems.forEach((item, index) => {
            item.classList.remove('visible');
            if (index === nextIndex) {
                item.classList.add('visible');
                item.style.animation = 'fadeInScale 0.5s ease-out';
            }
        });
    }
}

// Initialize touch gesture handler
const touchHandler = new TouchGestureHandler();

// Enhanced Portfolio Item Interactions
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Add touch feedback
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        item.addEventListener('touchend', function() {
            this.style.transform = '';
        }, { passive: true });
        
        // Add ripple effect on click/tap
        item.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
});

// Performance: Preload critical images
document.addEventListener('DOMContentLoaded', function() {
    const criticalImages = document.querySelectorAll('img[loading="eager"]');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
});