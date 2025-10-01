---
layout: default
title: Home
description: "Eunice Adorno - Photographer Portfolio. Explore documentary photography, portrait work, and artistic narratives."
---

<section class="hero" data-animate="fade-up">
    <div class="hero-carousel">
        <div class="hero-slide active" style="background-image: url('{{ '/assets/images/hero/portada01.jpg' | relative_url }}');"></div>
        <div class="hero-slide" style="background-image: url('{{ '/assets/images/hero/portada02.jpeg' | relative_url }}');"></div>
        <div class="hero-slide" style="background-image: url('{{ '/assets/images/hero/portada04.jpg' | relative_url }}');"></div>
        <div class="hero-slide" style="background-image: url('{{ '/assets/images/hero/portada05.JPG' | relative_url }}');"></div>
        <div class="hero-slide" style="background-image: url('{{ '/assets/images/hero/eunice_adorno_profile.jpg' | relative_url }}');"></div>
        <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
        <div class="hero-text" data-animate="fade-up" data-delay="200">
            <h1 class="hero-title">{{ site.title }}</h1>
            <p class="hero-subtitle" data-animate="fade-up" data-delay="400">Documentary Photographer</p>
            <p class="hero-description" data-animate="fade-up" data-delay="600">Exploring femininity, nature, and personal narratives through the lens of photography</p>
            <div class="hero-actions" data-animate="fade-up" data-delay="800">
                <a href="{{ '/portfolio' | relative_url }}" class="cta-button primary">View Portfolio</a>
                <a href="{{ '/bio' | relative_url }}" class="cta-button secondary">About Me</a>
            </div>
        </div>
    </div>
    
    <div class="hero-controls">
        <button class="carousel-prev" aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
        </button>
        <button class="carousel-next" aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
        </button>
    </div>
    
    <div class="hero-indicators">
        <button class="indicator active" data-slide="0" aria-label="Go to slide 1"></button>
        <button class="indicator" data-slide="1" aria-label="Go to slide 2"></button>
        <button class="indicator" data-slide="2" aria-label="Go to slide 3"></button>
        <button class="indicator" data-slide="3" aria-label="Go to slide 4"></button>
        <button class="indicator" data-slide="4" aria-label="Go to slide 5"></button>
    </div>
</section>

<section class="featured-portfolio" data-animate="fade-up">
    <div class="container">
        <div class="portfolio-layout">
            <div class="portfolio-gallery" data-animate="fade-up" data-delay="200">
                {% assign featured_projects = site.data.portfolio.projects | where_exp: "project", "project.images.size > 0" %}
                {% assign project = featured_projects.first %}
                <div class="gallery-image large" data-animate="fade-up" data-delay="300">
                    <img src="{{ '/assets/images/portfolio/' | append: project.slug | append: '/' | append: project.images[0] | relative_url }}" 
                         alt="{{ project.title }}" 
                         loading="lazy">
                </div>
                <div class="gallery-image medium" data-animate="fade-up" data-delay="400">
                    <img src="{{ '/assets/images/portfolio/' | append: project.slug | append: '/' | append: project.images[1] | relative_url }}" 
                         alt="{{ project.title }}" 
                         loading="lazy">
                </div>
                <div class="gallery-image small" data-animate="fade-up" data-delay="500">
                    <img src="{{ '/assets/images/portfolio/' | append: project.slug | append: '/' | append: project.images[2] | relative_url }}" 
                         alt="{{ project.title }}" 
                         loading="lazy">
                </div>
            </div>
            
            <div class="portfolio-cta" data-animate="fade-up" data-delay="600">
                <div class="cta-content">
                    <h2 class="cta-title">Explore My Work</h2>
                    <p class="cta-description">Discover my latest photography projects and documentary series</p>
                    <a href="{{ '/portfolio' | relative_url }}" class="cta-button primary">View Portfolio</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="about-preview" data-animate="fade-up">
    <div class="container">
        <div class="about-content">
            <div class="about-text" data-animate="fade-right">
                <h2>About the Artist</h2>
                <p>Eunice Adorno's work explores the intersection of femininity, nature, and personal narratives through the lens of documentary photography.</p>
                <a href="{{ '/bio' | relative_url }}" class="cta-button">Read Full Bio</a>
            </div>
            <div class="about-image" data-animate="fade-left">
                <img src="{{ '/assets/images/eunice_adorno_about.jpg' | relative_url }}" 
                     alt="{{ site.title }} - About the Artist" 
                     loading="lazy">
            </div>
        </div>
    </div>
</section>