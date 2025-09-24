// script.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. Sticky Header on Scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add class when scrolled more than 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scrolling for the scroll-down arrow
    const scrollArrow = document.querySelector('.scroll-down-arrow');
    if (scrollArrow) { // Check if the arrow exists on the page
        scrollArrow.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default jump
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

});