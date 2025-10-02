document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    acc.addEventListener('click', function () {
      // Toggle active class for styling
      this.classList.toggle('active');

      // Toggle panel visibility
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Optional: Animate section fade-in on scroll
  const sections = document.querySelectorAll('section');
  const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  sections.forEach(section => {
    appearOnScroll.observe(section);
  });
});
