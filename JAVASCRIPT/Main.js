// Selecciona los elementos del menú y el icono de hamburguesa
const menu = document.querySelector('.menu');
const burgerIcon = document.querySelector('.burger-icon');

// Agrega un evento para abrir/cerrar el menú
burgerIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});

// Cierra el menú cuando se hace clic en un enlace (para pantallas móviles)
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });
});

// Selecciona el elemento nav
const nav = document.querySelector('nav');

// Posición donde el nav se hace sticky
const stickyPosition = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > stickyPosition) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
