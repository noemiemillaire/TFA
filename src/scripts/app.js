"use strict"


//burger menu
const menuBurger = document.querySelector('.menu__icon');
const menu = document.querySelector('.nav')
const menu__lien = document.querySelector('.menu__el')

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

menu__lien.addEventListener('click', function(){
    menu.classList.remove('menu--open');
})