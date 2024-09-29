// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Popup Functionality
const modal = document.getElementById('cookieModal');
const closeModal = document.getElementById('closeModal');

// Show the modal after the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('modalShown')) {
        modal.style.display = 'block';
        localStorage.setItem('modalShown', 'true');
    }
});

// Close the modal when the close button is clicked
closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});
// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
