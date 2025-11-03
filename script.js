// 1. Mobile Navigation Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu visibility when the button is clicked
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('open');
    });

    // Close the menu when a link is clicked (for single-page navigation)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 2. Automatically Update Footer Year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // 3. Simple Form Submission (for demonstration, won't actually send email without a backend)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop the page from reloading
            
            // In a real application, you would use 'fetch' to send data to a server.
            console.log('Form submission intercepted. Data ready to be sent to a backend API!');
            
            // Simple DOM manipulation to show success message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Message Sent! (Check Console)';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
                contactForm.reset();
            }, 3000);
        });
    }
});
