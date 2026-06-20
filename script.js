const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((element, index) => {
  // Purposeful technical delay for staggered reveal
  element.style.transitionDelay = `${Math.min(index * 80, 240)}ms`;
  observer.observe(element);
});

// Subtle "System Scan" effect on hero portrait
const portrait = document.querySelector('.portrait');
if (portrait) {
  portrait.addEventListener('mouseenter', () => {
    portrait.style.borderColor = 'var(--cyan)';
  });
  portrait.addEventListener('mouseleave', () => {
    portrait.style.borderColor = 'var(--line)';
  });
}
