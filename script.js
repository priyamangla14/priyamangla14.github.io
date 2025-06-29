// Theme management
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Add keyboard support
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update button icon
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Smooth scrolling for navigation links
class SmoothScroller {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                // Don't prevent default for external links (like PDF) or HTML pages
                if (targetId.startsWith('http') || targetId.endsWith('.pdf') || targetId.includes('.html')) {
                    return; // Let the link work normally
                }
                
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe all sections and cards
        const sections = document.querySelectorAll('.section');
        const cards = document.querySelectorAll('.blog-card, .project-card');
        
        [...sections, ...cards].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Typing effect for hero title
class TypingEffect {
    constructor() {
        this.heroTitle = document.querySelector('.hero-title');
        this.init();
    }

    // Helper to type out HTML content, not just plain text
    typeHtml(element, html, i = 0) {
        // If we've reached the end, stop
        if (i >= html.length) return;
        // If next char is a tag, add the whole tag at once
        if (html[i] === '<') {
            const closeIdx = html.indexOf('>', i);
            if (closeIdx !== -1) {
                element.innerHTML += html.slice(i, closeIdx + 1);
                this.typeHtml(element, html, closeIdx + 1);
                return;
            }
        }
        // Otherwise, add one character
        element.innerHTML += html[i];
        setTimeout(() => this.typeHtml(element, html, i + 1), 50);
    }

    init() {
        if (!this.heroTitle) return;
        const html = this.heroTitle.innerHTML;
        this.heroTitle.innerHTML = '';
        setTimeout(() => this.typeHtml(this.heroTitle, html, 0), 500);
    }
}

// Mobile menu functionality
class MobileMenu {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.init();
    }

    init() {
        // Add mobile menu toggle if needed
        if (window.innerWidth <= 768) {
            this.addMobileMenu();
        }
        
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.addMobileMenu();
            } else {
                this.removeMobileMenu();
            }
        });
    }

    addMobileMenu() {
        if (this.nav.classList.contains('mobile-menu')) return;
        
        this.nav.classList.add('mobile-menu');
        this.nav.style.display = 'none';
        
        // Add hamburger menu button
        const hamburger = document.createElement('button');
        hamburger.className = 'mobile-menu-btn';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0.5rem;
        `;
        
        hamburger.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        const headerContent = document.querySelector('.header-content');
        headerContent.insertBefore(hamburger, this.nav);
    }

    removeMobileMenu() {
        this.nav.classList.remove('mobile-menu');
        this.nav.style.display = 'flex';
        
        const hamburger = document.querySelector('.mobile-menu-btn');
        if (hamburger) {
            hamburger.remove();
        }
    }

    toggleMenu() {
        const isVisible = this.nav.style.display !== 'none';
        this.nav.style.display = isVisible ? 'none' : 'flex';
    }
}

// Form validation for contact form (if added later)
class FormValidator {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showError(input, 'This field is required');
                isValid = false;
            } else {
                this.removeError(input);
            }
        });
        
        return isValid;
    }

    showError(input, message) {
        const errorDiv = input.parentNode.querySelector('.error-message') || 
                        document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        
        if (!input.parentNode.querySelector('.error-message')) {
            input.parentNode.appendChild(errorDiv);
        }
        
        input.style.borderColor = '#dc3545';
    }

    removeError(input) {
        const errorDiv = input.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        input.style.borderColor = '';
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();
        
        // Preload critical resources
        this.preloadResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    preloadResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SmoothScroller();
    new AnimationObserver();
    new TypingEffect();
    new MobileMenu();
    new FormValidator();
    new PerformanceOptimizer();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Add some CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .mobile-menu {
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--bg-primary);
            border-top: 1px solid var(--border-color);
            padding: 1rem;
            box-shadow: var(--shadow);
        }
        
        .mobile-menu-btn {
            display: block !important;
        }
    }
    
    @media (min-width: 769px) {
        .mobile-menu-btn {
            display: none !important;
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style); 