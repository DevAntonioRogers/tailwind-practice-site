const navMenu = document.querySelector('.nav-menu')
const icon = document.querySelector(".mobile-icon")

icon.addEventListener('click', () => {
  navMenu.classList.toggle('left-0')
  icon.name = icon.name === 'menu' ? 'close' : 'menu'
})