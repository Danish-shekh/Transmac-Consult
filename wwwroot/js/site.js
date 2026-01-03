// Mobile navigation toggle with smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(12px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-12px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth scroll for all anchor links
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
    // ELEGANT SECTION-BY-SECTION SCROLL REVEAL
    // ========================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Also reveal child grids
                const grids = entry.target.querySelectorAll('.grid-2, .grid-3');
                grids.forEach(grid => {
                    grid.classList.add('revealed');
                });
                
                // Optional: Unobserve after reveal for performance
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    });

    // Observe all sections and their parents
    document.querySelectorAll('.content-section, .global-reach-section, .notable-overview, .page-content, .page-content > .container').forEach(section => {
        revealObserver.observe(section);
    });

    // ========================================
    // SCROLL-DRIVEN BACKGROUND ANIMATION - SMOOTHER
    // ========================================
    let ticking = false;
    let lastScrollPos = 0;
    
    window.addEventListener('scroll', function() {
        lastScrollPos = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = lastScrollPos;
                
                // Scroll-driven background animation for railway and lori - SMOOTHER
                const animatedBgs = document.querySelectorAll('.animated-background');
                animatedBgs.forEach(bg => {
                    const section = bg.closest('.animated-bg-header');
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        const sectionTop = rect.top + scrolled;
                        const sectionHeight = rect.height;
                        const windowHeight = window.innerHeight;
                        
                        // Calculate scroll progress relative to the section - SLOWER movement
                        const scrollProgress = (scrolled - sectionTop + windowHeight) / (windowHeight + sectionHeight);
                        
                        // Move background from right to left based on scroll (0 to -100%) - SLOWER
                        if (scrollProgress >= 0 && scrollProgress <= 1) {
                            const moveAmount = scrollProgress * 40; // Reduced from 50 to 40 for slower movement
                            bg.style.transform = `translateX(-${moveAmount}%)`;
                        }
                    }
                });

                // Elegant parallax for hero sections - SMOOTHER & SLOWER
                const heroSections = document.querySelectorAll('.hero-section, .page-hero');
                heroSections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const speed = 0.25; // Reduced from 0.4 for smoother effect
                        const yPos = (scrolled - section.offsetTop) * speed;
                        section.style.backgroundPositionY = `${yPos}px`;
                    }
                });

                // Shrink navbar elegantly on scroll
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    if (scrolled > 50) {
                        navbar.style.padding = '0.8rem 0';
                        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                    } else {
                        navbar.style.padding = '1.2rem 0';
                        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                    }
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });

    // ========================================
    // ELEGANT 3D HOVER EFFECTS
    // ========================================
    const cards = document.querySelectorAll('.card, .notable-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 40;
            const rotateY = (centerX - x) / 40;
            
            card.style.transform = `translateY(-12px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            card.style.boxShadow = '0 25px 60px rgba(26, 58, 92, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            card.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
        });
    });

    // ========================================
    // ELEGANT PAGE LOAD & INITIALIZATION
    // ========================================
    window.addEventListener('load', function() {
        // Smooth fade in on page load
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
        
        // Trigger initial scroll to reveal elements in viewport
        window.dispatchEvent(new Event('scroll'));
        
        // Add smooth transition to navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        }
    });

    // Reveal elements already in viewport on page load
    setTimeout(() => {
        const viewportHeight = window.innerHeight;
        document.querySelectorAll('.content-section, .global-reach-section, .notable-overview, .grid-2, .grid-3').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < viewportHeight * 0.85) {
                section.classList.add('revealed');
            }
        });
        
        // Force trigger scroll event to initialize all animations
        window.dispatchEvent(new Event('scroll'));
    }, 150);

    // ===========================
    // NEW PROJECTS PAGE INTERACTIONS
    // ===========================
    
    // Interactive Category Cards - Expand on Hover
    const categoryCards = document.querySelectorAll('.project-category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Expand this card
            this.classList.add('expanded');
            this.classList.remove('collapsed');
            
            // Collapse other cards
            categoryCards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.add('collapsed');
                    otherCard.classList.remove('expanded');
                }
            });
        });
    });
    
    // Reset all cards when mouse leaves the cards container
    const cardsContainer = document.querySelector('.interactive-project-cards');
    if (cardsContainer) {
        cardsContainer.addEventListener('mouseleave', function() {
            categoryCards.forEach(card => {
                card.classList.remove('expanded', 'collapsed');
            });
        });
    }
    
    // Scroll-triggered animations for detail sections
    const detailSections = document.querySelectorAll('.project-detail-section');
    
    const detailObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add in-view class to trigger all animations
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    });
    
    detailSections.forEach(section => {
        detailObserver.observe(section);
    });
    
    // Smooth scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const firstDetailSection = document.querySelector('.project-detail-section');
            if (firstDetailSection) {
                firstDetailSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // ========================================
    // PROJECTS PAGE ENHANCED INTERACTIONS
    // ========================================
    
    // Parallax effect on scroll for project sections
    const projectSections = document.querySelectorAll('.project-section');
    
    if (projectSections.length > 0) {
        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                projectSections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const offset = scrolled - sectionTop;
                    
                    if (offset > -window.innerHeight && offset < sectionHeight) {
                        const bgPattern = section.querySelector('.bg-pattern');
                        if (bgPattern) {
                            const speed = 0.5;
                            bgPattern.style.transform = `translateY(${offset * speed}px)`;
                        }
                    }
                });
            });
        }, { passive: true });
    }

    // Smooth section navigation
    const projectLinks = document.querySelectorAll('a[href^="#railway"], a[href^="#commercial"], a[href^="#business"]');
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add stagger animation to project cards on scroll
    const projectCardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.project-card, .business-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                projectCardsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.projects-grid, .business-projects').forEach(grid => {
        const cards = grid.querySelectorAll('.project-card, .business-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
        });
        projectCardsObserver.observe(grid);
    });

    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // Scroll progress indicator for hero section
    const projectsHero = document.querySelector('.projects-hero');
    if (projectsHero) {
        window.addEventListener('scroll', () => {
            const heroHeight = projectsHero.offsetHeight;
            const scrolled = window.pageYOffset;
            const progress = Math.min(scrolled / heroHeight, 1);
            
            const scrollArrow = document.querySelector('.scroll-indicator');
            if (scrollArrow) {
                scrollArrow.style.opacity = 1 - progress;
            }
        });
    }
});

