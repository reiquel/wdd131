document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    window.addEventListener('click', (event) => {
        if (event.target == mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // Add active class to the current page's link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Get the current year for the footer using template literals
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = `${currentYear}`;

    // Get the last modified date and format it using template literals
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;

    // Call to Action Button (if it exists on the page)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (event) => {
            const href = ctaButton.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    }

    // Contact Form Submission Handling (if it exists on the page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(`Thank you for contacting us! We will get back to you soon.`);
            contactForm.reset();
        });
    }

    // Consultation Form Submission Handling (if it exists on the page)
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(`Thank you for booking your consultation! We will contact you shortly.`);
            consultationForm.reset();
        });
    }

    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                answer.classList.toggle('active');

                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer').classList.remove('active');
                    }
                });
            });
        });
    }

    // Storing and retrieving FAQ data
    const faqData = {
        "faq1": {
            question: "What is TeleConnect Health?",
            answer: "TeleConnect Health is a platform for virtual doctor consultations."
        },
        "faq2": {
            question: "How do I schedule an appointment?",
            answer: "You can schedule an appointment through the 'Book a Consultation' button."
        }
    };

    // Storing data to localStorage (if applicable)
    const lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        console.log(`Welcome back! Your last visit was on ${lastVisit}`);
    } else {
        console.log("Welcome! This is your first visit.");
    }

    // Store current visit date in localStorage
    const currentVisit = new Date().toLocaleString();
    localStorage.setItem('lastVisit', currentVisit);

});
