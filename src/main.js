import './style.css'

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // Dot follows immediately
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Outline follows with delay (using animate for smoother performance)
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Hover effect for cursor
document.querySelectorAll('a, button, .book-card, .interest-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorOutline.style.width = '50px';
    cursorOutline.style.height = '50px';
    cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
  });
  el.addEventListener('mouseleave', () => {
    cursorOutline.style.width = '30px';
    cursorOutline.style.height = '30px';
    cursorOutline.style.backgroundColor = 'transparent';
  });
});

// Parallax Effect for Hero
const heroContent = document.querySelector('.hero-content');
const heroBg = document.querySelector('.hero-bg-parallax');

document.addEventListener('mousemove', (e) => {
  if (window.scrollY > window.innerHeight) return; // Only active in hero

  const x = (window.innerWidth - e.pageX * 2) / 100;
  const y = (window.innerHeight - e.pageY * 2) / 100;

  heroContent.style.transform = `translate(${x * 2}px, ${y * 2}px)`;
  heroBg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in class to elements we want to animate
const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-section');
animatedElements.forEach(el => {
  observer.observe(el);
});

// Dynamic Glitch Effect for Hero Title
const glitchText = document.querySelector('.glitch');
if (glitchText) {
  setInterval(() => {
    glitchText.classList.add('active');
    setTimeout(() => {
      glitchText.classList.remove('active');
    }, 200);
  }, 4000);
}
