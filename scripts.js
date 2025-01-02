document.addEventListener('DOMContentLoaded', () => { 
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        const hero = document.querySelector('.hero');
        const floatingButton = document.querySelector('.floating-button');

        const heroBottom = hero.getBoundingClientRect().bottom;

        if (heroBottom < 0) {
            floatingButton.classList.add('show');
        } else {
            floatingButton.classList.remove('show');
        }
    });
});
