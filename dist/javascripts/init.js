// hamburger.js
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-js-hamburger-button]');
  const menu = document.getElementById('hamburger-navigation');

  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded
    button.setAttribute('aria-expanded', String(!isOpen));

    // Show/hide the menu
    if (isOpen) {
      menu.hidden = true;
      menu.classList.remove('is-open');
    } else {
      menu.hidden = false;
      menu.classList.add('is-open');
    }
  });
});
