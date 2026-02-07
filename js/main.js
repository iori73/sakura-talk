/**
 * Sakura Talk - Main JavaScript
 * Instagram-Inspired Version 3.0
 * Interactive features: Mobile menu, FAQ accordion, smooth scroll, animations
 */

(function() {
  'use strict';

  // =========================================
  // DOM ELEMENTS
  // =========================================
  
  const elements = {
    header: document.getElementById('header'),
    nav: document.getElementById('nav'),
    menuBtn: document.getElementById('menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    faqItems: document.querySelectorAll('.faq-item'),
    navLinks: document.querySelectorAll('.nav-link'),
    sections: document.querySelectorAll('section[id]'),
    fadeElements: document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right')
  };

  // =========================================
  // MOBILE MENU
  // =========================================
  
  const mobileMenu = {
    isOpen: false,
    
    init() {
      if (!elements.menuBtn || !elements.mobileMenu) return;
      
      elements.menuBtn.addEventListener('click', () => this.toggle());
      
      // Close menu when clicking nav links
      elements.mobileMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => this.close());
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
      
      // Close menu when clicking outside
      elements.mobileMenu.addEventListener('click', (e) => {
        if (e.target === elements.mobileMenu) {
          this.close();
        }
      });
    },
    
    toggle() {
      this.isOpen ? this.close() : this.open();
    },
    
    open() {
      this.isOpen = true;
      elements.menuBtn.classList.add('active');
      elements.menuBtn.setAttribute('aria-expanded', 'true');
      elements.mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    },
    
    close() {
      this.isOpen = false;
      elements.menuBtn.classList.remove('active');
      elements.menuBtn.setAttribute('aria-expanded', 'false');
      elements.mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // =========================================
  // FAQ ACCORDION
  // =========================================
  
  const faqAccordion = {
    init() {
      elements.faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
          question.addEventListener('click', () => this.toggle(item));
        }
      });
    },
    
    toggle(item) {
      const isActive = item.classList.contains('active');
      
      // Close all items
      elements.faqItems.forEach(faq => {
        faq.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    }
  };

  // =========================================
  // SMOOTH SCROLL
  // =========================================
  
  const smoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          if (targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            this.scrollTo(target);
          }
        });
      });
    },
    
    scrollTo(target) {
      const headerOffset = elements.header ? elements.header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // =========================================
  // HEADER EFFECTS
  // =========================================
  
  const headerEffects = {
    lastScrollY: 0,
    
    init() {
      if (!elements.header) return;
      
      window.addEventListener('scroll', utils.debounce(() => {
        this.handleScroll();
      }, 10));
      
      // Initial check
      this.handleScroll();
    },
    
    handleScroll() {
      const scrollY = window.pageYOffset;
      
      // Add shadow when scrolled
      if (scrollY > 50) {
        elements.header.classList.add('scrolled');
      } else {
        elements.header.classList.remove('scrolled');
      }
      
      this.lastScrollY = scrollY;
    }
  };

  // =========================================
  // SCROLL ANIMATIONS
  // =========================================
  
  const scrollAnimations = {
    observer: null,
    
    init() {
      if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        elements.fadeElements.forEach(el => el.classList.add('visible'));
        return;
      }
      
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              // Optionally unobserve after animation
              // this.observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1
        }
      );
      
      elements.fadeElements.forEach(el => {
        this.observer.observe(el);
      });
    }
  };

  // =========================================
  // ACTIVE NAV HIGHLIGHT
  // =========================================
  
  const activeNavHighlight = {
    init() {
      if (!elements.sections.length || !elements.navLinks.length) return;
      
      window.addEventListener('scroll', utils.debounce(() => {
        this.update();
      }, 100));
      
      // Initial check
      this.update();
    },
    
    update() {
      const scrollY = window.pageYOffset;
      const headerOffset = elements.header ? elements.header.offsetHeight : 0;
      
      elements.sections.forEach(section => {
        const sectionTop = section.offsetTop - headerOffset - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          elements.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  };

  // =========================================
  // UTILITY FUNCTIONS
  // =========================================
  
  const utils = {
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },
    
    throttle(func, limit) {
      let inThrottle;
      return function(...args) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
  };

  // =========================================
  // INITIALIZE
  // =========================================
  
  function init() {
    mobileMenu.init();
    faqAccordion.init();
    smoothScroll.init();
    headerEffects.init();
    scrollAnimations.init();
    activeNavHighlight.init();
    
    console.log('🌸 Sakura Talk initialized!');
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
