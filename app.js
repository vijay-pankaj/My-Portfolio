// Selecting elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Function to toggle the navigation menu
function toggleMenu() {
    navbar.classList.toggle('active');
}

// Event listener for the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Function to close the menu when a menu item is clicked (optional)
function closeMenu() {
    navbar.classList.remove('active');
}

// Event listeners for each menu item (optional)
const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Function to handle resizing of the window
function handleResize() {
    // If the window width is greater than 768px, ensure that the navigation menu is visible
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
}

// Event listener for window resize
window.addEventListener('resize', handleResize);
// Typed.js Initialization
const typed = new Typed('.double-text', {
    strings: ['Frontend Developer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});