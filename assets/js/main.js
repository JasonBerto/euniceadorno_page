// Index Theme - Minimal JavaScript
// The Index theme is primarily CSS-driven with minimal JavaScript requirements

document.addEventListener('DOMContentLoaded', function() {
    
    // Optional: Add smooth scrolling for anchor links
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
    
    // Optional: Lazy loading for images (if needed in future)
    // Can be extended for better performance with many portfolio items
    
});
