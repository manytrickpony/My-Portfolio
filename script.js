document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple form submission handler
  document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted successfully! We will be in touch soon!');
  });