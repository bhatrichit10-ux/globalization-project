// Section fade-in on scroll (Intersection Observer)
const observer = new window.IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.09 }
);
document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Navbar active class
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
