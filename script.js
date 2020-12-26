const menuIcon = document.querySelector('.menu-hamburguer');
const  navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle("change");
});