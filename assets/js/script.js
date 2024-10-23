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

// menu icon
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});