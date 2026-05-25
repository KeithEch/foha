// Phase 14 will populate animation styles for [data-animate] and .is-visible.
// This skeleton establishes the pattern — it runs but has no visual effect yet.

const animatables = document.querySelectorAll('[data-animate]');
if (animatables.length === 0) return;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

animatables.forEach((el) => observer.observe(el));
