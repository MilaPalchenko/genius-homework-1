//closing menu on btn click

const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => { 
    mobileMenu.classList.toggle('is-open');
}

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);



// auto-close mobile menu on click 
const menuLinks = document.querySelector('.mobile__links-group');

menuLinks.addEventListener('click', toggleMenu);