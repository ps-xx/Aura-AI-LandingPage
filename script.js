/**
 * Nexus AI Landing Page - Interactive JavaScript
 * Credit: Pablo.ejs | ps-xx | https://github.com/ps-xx
 * 
 * Handles:
 * - Mobile navigation toggle
 * - Smooth scroll animations
 * - Navbar scroll effects
 * - Accessibility improvements
 */

(function() {
    'use strict';

    // ============================================
    // DOM Elements
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.getElementById('navbar');
    const navLinksArray = document.querySelectorAll('.nav-link');
    
    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    function initMobileMenu() {
        if (!mobileMenuToggle || !navLinks) return;
        
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            
            // Toggle menu visibility
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', !isActive);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isActive ? '' : 'hidden';
        });
        
        // Close menu when clicking on a nav link
        navLinksArray.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideNav = navLinks.contains(e.target);
            const isClickOnToggle = mobileMenuToggle.contains(e.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function initNavbarScroll() {
        if (!navbar) return;
        
        let lastScroll = 0;
        const scrollThreshold = 50;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class when user scrolls down
            if (currentScroll > scrollThreshold) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }, { passive: true });
    }
    
    // ============================================
    // Scroll Animations (Intersection Observer)
    // ============================================
    function initScrollAnimations() {
        // Check if Intersection Observer is supported
        if (!('IntersectionObserver' in window)) {
            // Fallback: show all elements immediately
            document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
                el.classList.add('visible');
            });
            return;
        }
        
        // Animation options
        const animationOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, animationOptions);
        
        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip empty hash or just '#'
                if (href === '#' || href === '') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ============================================
    // Button Hover Effects Enhancement
    // ============================================
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // ============================================
    // Accessibility: Keyboard Navigation
    // ============================================
    function initKeyboardNavigation() {
        // Close mobile menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                mobileMenuToggle.focus();
            }
        });
        
        // Trap focus within mobile menu when open
        if (navLinks && mobileMenuToggle) {
            const focusableElements = navLinks.querySelectorAll(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            
            navLinks.addEventListener('keydown', (e) => {
                if (!navLinks.classList.contains('active')) return;
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            });
        }
    }
    
    // ============================================
    // Performance: Debounce Function
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ============================================
    // Initialize All Functions
    // ============================================
    function init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Initialize all features
        initMobileMenu();
        initNavbarScroll();
        initScrollAnimations();
        initSmoothScroll();
        initButtonEffects();
        initKeyboardNavigation();
        
        // Show initial animations for elements in viewport
        const checkInitialView = () => {
            document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInViewport) {
                    el.classList.add('visible');
                }
            });
        };
        
        // Check after a short delay to ensure styles are loaded
        setTimeout(checkInitialView, 100);
    }
    
    // Start initialization
    init();
    
    // Re-initialize scroll animations if new content is dynamically added
    // (useful for future enhancements)
    window.reinitAnimations = initScrollAnimations;
    
})();
