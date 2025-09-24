// scripts/script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Sticky Header on Scroll ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Smooth Scrolling for the scroll-down arrow ---
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // --- 3. Testimonial Slider (Swiper.js) ---
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        const swiper = new Swiper('.testimonials-slider', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 30,
        });
    }

    // --- 4. "Reveal on Scroll" Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 5. Responsive Mobile Navigation ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mainContent = document.querySelector('main');

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.classList.toggle('active');
        mainContent.classList.toggle('nav-active'); // To push main content
        document.body.classList.toggle('no-scroll'); // To prevent scrolling when menu is open
    });

});