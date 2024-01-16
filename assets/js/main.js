/*=============== SHOW MENU ===============*/
const navBody = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".icon-nav");

navToggle.addEventListener('click', () => {
  navBody.classList.toggle('show-menu');
  navToggle.classList.toggle('show-menu');
  document.body.classList.toggle('lock');
})

/*=============== SHADOW HEADER ===============*/
window.addEventListener("scroll", () => {
  const header = document.querySelector('.header');

  this.scrollY >=50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
})