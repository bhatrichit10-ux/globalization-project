// Typing animation for hero title
const typingText = "Discover the global\nconnections that shape our world";
const typingTitle = document.getElementById('typing-title');
let charIndex = 0;
let lineIndex = 0;
const lines = typingText.split('\n');

function typeLine() {
  if (charIndex <= lines[lineIndex].length) {
    typingTitle.textContent = lines.slice(0, lineIndex).join('\n') +
      (lineIndex ? '\n' : '') + lines[lineIndex].substr(0, charIndex);
    charIndex++;
    setTimeout(typeLine, 70);
  } else {
    lineIndex++;
    charIndex = 0;
    if (lineIndex < lines.length) setTimeout(typeLine, 300);
  }
}
typeLine();

// Section fade-in on scroll (Intersection Observer)
const observer = new window.IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.10 }
);
document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Navbar active class on scroll
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

// Cursor blob animation
const cursorBlob = document.getElementById('cursor-blob');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let blobX = mouseX;
let blobY = mouseY;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animateBlob() {
  blobX += (mouseX - blobX) * 0.15;
  blobY += (mouseY - blobY) * 0.15;
  cursorBlob.style.transform = `translate(${blobX}px,${blobY}px) scale(1)`;
  requestAnimationFrame(animateBlob);
}
animateBlob();
