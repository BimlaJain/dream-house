let activeMenu = 'home-menu'; // Track the currently active menu
let activeDropdown = null; // Track the currently active dropdown

// Function to activate menu and add black border
function activateMenu(menuId) {
    // Remove active state from previous menu
    if (activeMenu) {
        const previousMenu = document.getElementById(activeMenu);
        previousMenu.classList.remove('border-black'); // Remove border from previous menu
        previousMenu.classList.remove('active'); // Remove active class
    }

    // Add active state to clicked menu
    const currentMenu = document.getElementById(menuId);
    currentMenu.classList.add('border-black'); // Add border to current menu
    currentMenu.classList.add('active'); // Add active class to current menu

    // Set new active menu
    activeMenu = menuId;

    // If the clicked menu is not Home, remove active from Home
    if (menuId !== 'home-menu') {
        const homeMenu = document.getElementById('home-menu');
        homeMenu.classList.remove('border-black'); // Remove border from Home
        homeMenu.classList.remove('active'); // Remove active class from Home
    }
}

// Function to toggle dropdown visibility and rotate SVG
function toggleDropdown(menuId) {
    const dropdown = document.querySelector(`#${menuId} ul`);
    const arrow = document.querySelector(`#${menuId} svg`);
    const button = document.querySelector(`#${menuId} button`);

    // Hide any previously active dropdown
    if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.add('hidden');
        const activeArrow = activeDropdown.previousElementSibling.querySelector('svg');
        activeArrow.classList.remove('rotate-180');
        activeDropdown.previousElementSibling.classList.remove('border-black');  // Reset border
    }

    // Toggle the clicked dropdown
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        arrow.classList.add('rotate-180');  // Rotate arrow
        button.classList.add('border-black');  // Add black border
        activeDropdown = dropdown;  // Set the active dropdown
    } else {
        dropdown.classList.add('hidden');
        arrow.classList.remove('rotate-180');  // Reset arrow rotation
        button.classList.remove('border-black');  // Remove the black border
        activeDropdown = null;  // No active dropdown
    }
}

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

// Add event listener for the menu button
menuBtn.addEventListener('click', () => {
    // Toggle the mobile menu visibility
    const isMenuOpen = !mobileMenu.classList.contains('hidden'); // Check if the menu is already open
    
    if (isMenuOpen) {
        // If the menu is open, close it and show the hamburger icon
        mobileMenu.classList.add('hidden');   // Hide the menu
        closeIcon.classList.add('hidden');    // Hide close icon
        hamburgerIcon.classList.remove('hidden'); // Show hamburger icon
    } else {
        // If the menu is closed, open it and show the close icon
        mobileMenu.classList.remove('hidden'); // Show the menu
        hamburgerIcon.classList.add('hidden');  // Hide hamburger icon
        closeIcon.classList.remove('hidden');   // Show close icon
    }
});