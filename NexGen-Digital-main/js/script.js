document.addEventListener('DOMContentLoaded', function () {

  // ── Year ──────────────────────────────────────────────────────
  document.querySelectorAll('#year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ── Sticky header scroll effect ───────────────────────────────
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Scroll reveal ─────────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // ── Contact form → mailto ─────────────────────────────────────
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      const data = new FormData(form);
      const name    = data.get('name') || '';
      const email   = data.get('email') || '';
      const message = data.get('message') || '';
      const to      = 'info@nexgendigital.co.za';
      const subject = encodeURIComponent('Project inquiry from ' + name);
      const body    = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
