const navMenu = document.querySelector('.nav-menu');
const icon = document.querySelector('.mobile-icon');
const links = document.querySelectorAll('.nav-menu a');
const body = document.querySelector('body');

icon.addEventListener('click', () => {
  navMenu.classList.toggle('left-0');
  icon.name = icon.name === 'menu' ? 'close' : 'menu';
  body.classList.toggle('overflow-hidden');
});


links.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('left-0');
    icon.name = 'menu';
    body.classList.remove('overflow-hidden');
  });
});
