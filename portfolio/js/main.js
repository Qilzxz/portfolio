/* Portfolio — Lean JS */

// ── Nav scroll + active link (single throttled handler) ─
const nav = document.querySelector('.nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;

      nav.classList.toggle('scrolled', y > 80);

      let current = '';
      sections.forEach(s => {
        if (y >= s.offsetTop - 200) current = s.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });

      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ── Fade-in on scroll (IntersectionObserver) ───────────
const fadeEls = document.querySelectorAll(
  '.project-card, .about-grid, .contact-content, .section-header, .about-stats'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => observer.observe(el));

// ── Stat counter ───────────────────────────────────────
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.textContent;
    const target = parseInt(raw);
    const suffix = raw.replace(/[0-9]/g, '');
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(p * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(s => statObserver.observe(s));
