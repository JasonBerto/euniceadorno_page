---
layout: page
title: Portfolio
permalink: /portfolio/
---

<div class="portfolio-page">
    <div class="container">
        <div class="portfolio-header">
            <h1>Portfolio</h1>
            <p>Explore my photographic work across different projects and themes</p>
        </div>
        
        <div class="portfolio-controls">
            <div class="portfolio-filters">
                <button class="filter-btn active" data-filter="all">All Projects</button>
                <button class="filter-btn" data-filter="portrait">Portrait</button>
                <button class="filter-btn" data-filter="documentary">Documentary</button>
            </div>
            
            <div class="portfolio-sort">
                <select class="sort-select" id="sort-select">
                    <option value="year-desc">Year (Newest First)</option>
                    <option value="year-asc">Year (Oldest First)</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                </select>
            </div>
        </div>
        
        <div class="portfolio-grid" id="portfolio-grid">
            {% for project in site.data.portfolio.projects %}
            <div class="portfolio-item" 
                 data-category="{{ project.category }}" 
                 data-year="{{ project.year }}"
                 data-title="{{ project.title | downcase }}">
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
        
        <div class="portfolio-stats">
            <div class="stat-item">
                <span class="stat-number">{{ site.data.portfolio.projects.size }}</span>
                <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">{{ site.data.portfolio.projects | map: 'images' | map: 'size' | sum }}</span>
                <span class="stat-label">Images</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">{{ site.data.portfolio.projects | map: 'year' | uniq | size }}</span>
                <span class="stat-label">Years</span>
            </div>
        </div>
    </div>
</div>
