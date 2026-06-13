const themeToggle = document.querySelector(".theme-toggle");
const reveals = document.querySelectorAll(".reveal");
const depthTarget = document.querySelector("[data-depth]");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
  observer.observe(element);
});

if (depthTarget && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * -10;
    depthTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });

  window.addEventListener("pointerleave", () => {
    depthTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}
