const target = document.querySelector('[data-scroll-lock="true"]');
if (!target) throw new Error('scroll-lock: no [data-scroll-lock] element found');

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) {
  // Honour user preference — skip entirely
} else {
  let fired = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (fired) return;
      const entry = entries[0];
      if (!entry.isIntersecting) return;

      fired = true;
      observer.disconnect();

      // Capture current position and pin the page there
      const lockedY = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        window.scrollTo({ top: lockedY, behavior: 'instant' });
      }, 1500);
    },
    { threshold: 0.1 }
  );

  observer.observe(target);
}
