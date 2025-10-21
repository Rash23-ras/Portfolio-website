// Smooth scroll navigation
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Prevent default form submission (demo purpose)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});