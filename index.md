---
layout: default
title: Home
---

<section class="hero" data-parallax="0.3">
    <div class="scroll-progress"></div>
    <div class="hero-content" data-animate="fade-up" data-delay="200">
        <h1 class="hero-title text-reveal">{{ site.title }}</h1>
        <p class="hero-subtitle" data-animate="fade-up" data-delay="400">Photographer</p>
        <a href="{{ '/portfolio' | relative_url }}" class="cta-button liquid-button" data-animate="scale-up" data-delay="600">View Portfolio</a>
    </div>
    <div class="hero-image" data-animate="fade-left" data-delay="800">
        <img src="{{ '/assets/images/hero/eunice_adorno_profile.jpg' | relative_url }}" alt="{{ site.title }}" loading="eager" class="floating">
    </div>
</section>

<section class="featured-work" data-animate="fade-up">
    <div class="container">
        <div class="section-header" data-animate="fade-up">
            <h2 class="text-reveal">Featured Work</h2>
            <p data-animate="fade-up" data-delay="200">Explore my latest photographic projects</p>
        </div>
        
        <div class="portfolio-grid" data-animate="stagger">
            {% for project in site.data.portfolio.projects limit:2 %}
            <div class="portfolio-item magnetic" data-stagger-item>
                <a href="{{ '/portfolio/' | append: project.slug | relative_url }}">
                    <div class="portfolio-image-container">
                        <img src="{{ '/assets/images/portfolio/' | append: project.slug | append: '/' | append: project.cover_image | relative_url }}" 
                             alt="{{ project.title }}" 
                             loading="lazy"
                             class="portfolio-cover">
                        <div class="portfolio-overlay">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.description }}</p>
                            <span class="project-year">{{ project.year }}</span>
                            <span class="project-category">{{ project.category | capitalize }}</span>
                        </div>
                    </div>
                </a>
            </div>
            {% endfor %}
        </div>
        
        <div class="cta-section" data-animate="fade-up" data-delay="400">
            <a href="{{ '/portfolio' | relative_url }}" class="cta-button liquid-button">View All Projects</a>
        </div>
    </div>
</section>

<section class="about-preview" data-animate="fade-up">
    <div class="container">
        <div class="about-content">
            <div class="about-text" data-animate="fade-right">
                <h2 class="text-reveal">About the Artist</h2>
                <p>Eunice Adorno's work explores the intersection of femininity, nature, and personal narratives through the lens of documentary photography.</p>
                <a href="{{ '/bio' | relative_url }}" class="cta-button liquid-button">Read Full Bio</a>
            </div>
            <div class="about-image" data-animate="fade-left">
                <img src="{{ '/assets/images/eunice_adorno_about.jpg' | relative_url }}" alt="{{ site.title }}" loading="lazy" class="morphing-shape">
            </div>
        </div>
    </div>
</section>

<section class="contact-preview" data-animate="fade-up">
    <div class="container">
        <div class="contact-content">
            <h2 class="text-reveal">Let's Connect</h2>
            <p data-animate="fade-up" data-delay="200">Interested in collaborating or have questions about my work?</p>
            <div class="contact-links" data-animate="stagger">
                <a href="mailto:{{ site.email }}" class="contact-link magnetic" data-stagger-item>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Email Me
                </a>
                <a href="https://www.instagram.com/euadorno/" target="_blank" class="contact-link magnetic" data-stagger-item>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.281-.07-1.689-.07-4.949 0-3.259.014-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow on Instagram
                </a>
            </div>
        </div>
    </div>
</section>
