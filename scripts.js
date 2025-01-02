// JavaScript for Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the visibility of the nav links
    hamburger.classList.toggle('active'); // Toggle the hamburger icon animation
});
