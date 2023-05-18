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

//parallax
const parallaxEls = document.querySelectorAll(".ligne");

window.addEventListener("scroll", parallax);

function parallax(){
    let scrollTop = window.pageYOffset;

    parallaxEls.forEach(function(parallaxEl){
        let speed = parallaxEl.getAttribute("data-speed");
        let parallaxSpeed = scrollTop * speed / 160

        parallaxEl.style.transform = "translateX(" + parallaxSpeed + "px)";
    });
}
