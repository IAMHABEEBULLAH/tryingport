document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const HIDDEN_CLASS = 'hidden';

    // Function to toggle menu visibility
    function toggleMenu() {
        const isHidden = mobileNav.classList.contains(HIDDEN_CLASS);

        if (isHidden) {
            mobileNav.classList.remove(HIDDEN_CLASS);
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            mobileNav.classList.add(HIDDEN_CLASS);
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Event listener for the toggle button
    menuToggle.addEventListener('click', toggleMenu);

    // Close the menu when a link is clicked
    mobileNav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            // Check if the menu is open before closing
            if (!mobileNav.classList.contains(HIDDEN_CLASS)) {
                toggleMenu(); 
            }
        }
    });

    // 2. Automatically Update Footer Year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // 3. Simple Form Submission Interception (Client-Side only)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // STOP form from reloading the page
            
            console.log('Form submission intercepted! Data ready to be sent.');
            
            // Provide simple user feedback (Vanilla JS DOM manipulation)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Message Sent!';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                contactForm.reset();
            }, 3000);
        });
    }
});
