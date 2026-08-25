document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav, .nav--dark');
  const btn = document.querySelector('.nav-hamburger');
  if (!nav || !btn) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('.nav-links a, .nav-links--dark a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', false);
    });
  });
});
