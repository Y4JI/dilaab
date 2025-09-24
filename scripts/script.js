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
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 5. UPDATED: Responsive Mobile Navigation with Overlay ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');

    // Function to close the menu
    function closeMenu() {
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Toggle menu with button
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMenu();
        } else {
            mobileNavToggle.setAttribute('aria-expanded', 'true');
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    });

    // Close menu by clicking overlay
    overlay.addEventListener('click', closeMenu);

});