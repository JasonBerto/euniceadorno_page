// Jekyll Portfolio - Essential JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // NAVIGATION FUNCTIONALITY
    // ========================================
    
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
    
    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Hamburger animation
            const spans = navToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) {
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    }
                    if (index === 1) {
                        span.style.opacity = '0';
                        span.style.transform = 'scale(0)';
                    }
                    if (index === 2) {
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    }
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset hamburger
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
        
        // Close menu when clicking on links
        navMenu.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset hamburger
                const spans = navToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
    
    // ========================================
    // PORTFOLIO FILTERING AND SORTING
    // ========================================
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sort-select');
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    if (filterButtons.length > 0 && portfolioGrid) {
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                applyFiltersAndSort();
            });
        });
        
        // Sort functionality
        if (sortSelect) {
            sortSelect.addEventListener('change', applyFiltersAndSort);
        }
        
        function applyFiltersAndSort() {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            const sortValue = sortSelect ? sortSelect.value : 'year-desc';
            
            const items = Array.from(portfolioGrid.children);
            
            // Filter items
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                if (activeFilter === 'all' || category === activeFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Sort visible items
            const visibleItems = items.filter(item => item.style.display !== 'none');
            visibleItems.sort((a, b) => {
                switch (sortValue) {
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
            
            // Reorder items
            visibleItems.forEach(item => portfolioGrid.appendChild(item));
        }
    }
    
    // ========================================
    // LIGHTBOX GALLERY
    // ========================================
    
    class LightboxGallery {
        constructor() {
            this.lightbox = document.getElementById('lightbox');
            this.lightboxImage = this.lightbox?.querySelector('.lightbox-image');
            this.lightboxCounter = this.lightbox?.querySelector('.lightbox-counter');
            this.closeBtn = this.lightbox?.querySelector('.lightbox-close');
            this.prevBtn = this.lightbox?.querySelector('.lightbox-prev');
            this.nextBtn = this.lightbox?.querySelector('.lightbox-next');
            
            this.images = [];
            this.currentIndex = 0;
            
            this.init();
        }
        
        init() {
            if (!this.lightbox) return;
            
            // Get all gallery images
            const galleryItems = document.querySelectorAll('.gallery-item img');
            this.images = Array.from(galleryItems).map(img => ({
                src: img.src,
                alt: img.alt
            }));
            
            // Add click listeners to gallery images
            galleryItems.forEach((img, index) => {
                img.addEventListener('click', () => this.open(index));
            });
            
            // Add click listeners to zoom buttons
            document.querySelectorAll('.gallery-zoom').forEach((btn, index) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.open(index);
                });
            });
            
            // Lightbox controls
            this.closeBtn?.addEventListener('click', () => this.close());
            this.prevBtn?.addEventListener('click', () => this.prev());
            this.nextBtn?.addEventListener('click', () => this.next());
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (!this.lightbox.classList.contains('active')) return;
                
                switch (e.key) {
                    case 'Escape':
                        this.close();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowRight':
                        this.next();
                        break;
                }
            });
            
            // Close on background click
            this.lightbox.addEventListener('click', (e) => {
                if (e.target === this.lightbox) {
                    this.close();
                }
            });
        }
        
        open(index) {
            if (this.images.length === 0) return;
            
            this.currentIndex = index;
            this.updateImage();
            this.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        close() {
            this.lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        prev() {
            this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
            this.updateImage();
        }
        
        next() {
            this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
            this.updateImage();
        }
        
        updateImage() {
            const image = this.images[this.currentIndex];
            this.lightboxImage.src = image.src;
            this.lightboxImage.alt = image.alt;
            
            if (this.lightboxCounter) {
                this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
            }
        }
    }
    
    // Initialize lightbox
    new LightboxGallery();
    
    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements with data-animate
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // LAZY LOADING
    // ========================================
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
    
    // ========================================
    // SMOOTH SCROLLING
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // ========================================
    // HERO CAROUSEL
    // ========================================
    
    class HeroCarousel {
        constructor() {
            this.slides = document.querySelectorAll('.hero-slide');
            this.indicators = document.querySelectorAll('.indicator');
            this.prevBtn = document.querySelector('.carousel-prev');
            this.nextBtn = document.querySelector('.carousel-next');
            this.currentSlide = 0;
            this.totalSlides = this.slides.length;
            this.autoPlayInterval = null;
            this.autoPlayDelay = 9000; // 9 seconds to match Ken Burns animation
            this.kenBurnsTimeout = null;
            
            this.init();
        }
        
        init() {
            if (this.slides.length === 0) return;
            
            // Event listeners
            this.prevBtn?.addEventListener('click', () => this.prevSlide());
            this.nextBtn?.addEventListener('click', () => this.nextSlide());
            
            this.indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => this.goToSlide(index));
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prevSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
            });
            
            // Touch/swipe support
            this.addTouchSupport();
            
            // Auto-play
            this.startAutoPlay();
            
            // Pause auto-play on hover
            const hero = document.querySelector('.hero');
            hero?.addEventListener('mouseenter', () => this.stopAutoPlay());
            hero?.addEventListener('mouseleave', () => this.startAutoPlay());
            
            // Start Ken Burns effect on first slide
            this.startKenBurnsEffect();
        }
        
        goToSlide(index) {
            // Clear any existing Ken Burns timeout
            if (this.kenBurnsTimeout) {
                clearTimeout(this.kenBurnsTimeout);
            }
            
            // Remove active class and Ken Burns animation from current slide
            this.slides[this.currentSlide]?.classList.remove('active', 'ken-burns');
            this.indicators[this.currentSlide]?.classList.remove('active');
            
            // Reset transform for current slide
            this.slides[this.currentSlide].style.transform = '';
            
            // Update current slide
            this.currentSlide = index;
            
            // Add active class to new slide and indicator
            this.slides[this.currentSlide]?.classList.add('active');
            this.indicators[this.currentSlide]?.classList.add('active');
            
            // Start Ken Burns effect after a short delay
            this.kenBurnsTimeout = setTimeout(() => {
                this.slides[this.currentSlide]?.classList.add('ken-burns');
            }, 100);
        }
        
        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.totalSlides;
            this.goToSlide(nextIndex);
        }
        
        prevSlide() {
            const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.goToSlide(prevIndex);
        }
        
        startAutoPlay() {
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoPlayDelay);
        }
        
        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }
        
        addTouchSupport() {
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;
            
            const hero = document.querySelector('.hero');
            
            hero?.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });
            
            hero?.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                endY = e.changedTouches[0].clientY;
                
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Only trigger if horizontal swipe is more significant than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        this.nextSlide(); // Swipe left - next slide
                    } else {
                        this.prevSlide(); // Swipe right - previous slide
                    }
                }
            });
        }
        
        startKenBurnsEffect() {
            // Start Ken Burns effect on the active slide
            setTimeout(() => {
                this.slides[this.currentSlide]?.classList.add('ken-burns');
            }, 100);
        }
    }
    
    // Initialize carousel when DOM is loaded
    const carousel = new HeroCarousel();
    
    // ========================================
    // KEN BURNS EFFECT
    // ========================================
    // Ken Burns effect is now handled within the HeroCarousel class
    
});