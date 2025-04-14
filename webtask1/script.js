document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});





// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// // Form Validation
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let message = document.getElementById('message').value.trim();

//     if (name === "" || email === "" || message === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     alert("Message sent successfully!");
//     this.reset();
// });

// // Email Validation Function
// function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }


// Initialize AOS animations
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,  // Animation duration (1s)
        once: true       // Animates only once
    });
});





document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMsg = document.getElementById("form-status");

    if (name === "" || email === "" || message === "") {
        statusMsg.innerText = "Please fill in all fields!";
        statusMsg.style.color = "red";
        return;
    }

    // Simulate form submission (Replace with backend API call)
    setTimeout(() => {
        statusMsg.innerText = "Message Sent Successfully!";
        statusMsg.style.color = "green";
    }, 1000);

    // Reset form after submission
    this.reset();
});



AOS.init({
    duration: 1000,  // Animation duration
    once: true       // Run animation only once
});
