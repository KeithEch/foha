const header = document.querySelector('header');
const sentinel = document.getElementById('nav-sentinel');

if (!header || !sentinel) throw new Error('nav-scroll: required elements not found');

let lastScrollY = window.scrollY;
let rafId = null;

function handleScroll() {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      header.classList.add('nav--hidden');
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove('nav--hidden');
    }
    lastScrollY = currentScrollY;
    rafId = null;
  });
}

// IntersectionObserver on the sentinel detects when we leave or return to the top.
// When away from top, a passive scroll listener tracks direction.
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    header.classList.remove('nav--hidden');
    window.removeEventListener('scroll', handleScroll);
  } else {
    lastScrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}, { threshold: 0 });

observer.observe(sentinel);
