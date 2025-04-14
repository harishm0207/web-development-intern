// Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  modeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Form Validation & Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Simple form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    formStatus.textContent = 'Please fill in all fields.';
    formStatus.style.color = 'red';
  } else {
    formStatus.textContent = 'Message sent successfully!';
    formStatus.style.color = 'green';
    // You can replace the next line with actual form submission code (like using Fetch API or AJAX)
    contactForm.reset();
  }
});
