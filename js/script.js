"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burgerButton');
    const menu = document.getElementById('mobileMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('open');
    });

});
