import './style.css'

// Multi-Layer Parallax Effect for Hero
const hero = document.querySelector('.hero');
const layers = document.querySelectorAll('.parallax-layer');

// Multi-Layer Parallax Effect for Hero with Smooth Lerp
if (hero && layers.length > 0) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  // Lerp function for smooth interpolation
  const lerp = (start, end, factor) => start + (end - start) * factor;

  hero.addEventListener('mousemove', (e) => {
    // Normalize mouse position (-1 to 1)
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  const animateParallax = () => {
    // Increased lerp factor from 0.05 to 0.1 for faster response
    currentX = lerp(currentX, mouseX, 0.1);
    currentY = lerp(currentY, mouseY, 0.1);

    layers.forEach((layer) => {
      // Get speed from data-speed attribute or default
      const dataSpeed = parseFloat(layer.getAttribute('data-speed')) || 0.02;
      // Increased speed multiplier from 500 to 800 for more dramatic movement
      const speed = dataSpeed * 800;

      const xOffset = currentX * speed;
      const yOffset = currentY * speed;

      layer.style.transform = `translate3d(${-xOffset}px, ${-yOffset}px, 0)`;
    });

    requestAnimationFrame(animateParallax);
  };

  animateParallax();

  // Reset on mouse leave (optional, but smooth return is nice)
  hero.addEventListener('mouseleave', () => {
    mouseX = 0;
    mouseY = 0;
  });
}


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

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const mobileBackdrop = document.querySelector('.mobile-menu-backdrop');

if (mobileMenuBtn && navLinks && mobileBackdrop) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('mobile-active');
    mobileBackdrop.classList.toggle('active');
  });

  // Close menu when clicking backdrop
  mobileBackdrop.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('mobile-active');
    mobileBackdrop.classList.remove('active');
  });

  // Close menu when clicking on a link
  const navLinkItems = navLinks.querySelectorAll('.nav-link');
  navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('mobile-active');
      mobileBackdrop.classList.remove('active');
    });
  });
}

