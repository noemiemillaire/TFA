"use strict"

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuBurger = document.querySelector('.menu__icon');
const menu = document.querySelector('.nav')
const menu__lien = document.querySelector('.menu__el')

const parallaxEls = document.querySelectorAll(".ligne");

const accentAll = document.querySelectorAll("#recherches .paragraphe--accent");

const sondageAll = document.querySelectorAll(".sondage__el img");




//burger menu

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

menu__lien.addEventListener('click', function(){
    menu.classList.remove('menu--open');
})


//nav bar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}




//parallax

window.addEventListener("scroll", parallax);

function parallax(){
    let scrollTop = window.pageYOffset;

    parallaxEls.forEach(function(parallaxEl){
        let speed = parallaxEl.getAttribute("data-speed");
        let parallaxSpeed = scrollTop * speed / 160

        if (window.innerWidth > 1000) {
            parallaxEl.style.transform = "translateY(" + parallaxSpeed + "px)";
        } else {
            parallaxEl.style.transform = "translateX(" + parallaxSpeed + "px)";
        }
    });
}




//anim texte 

accentAll.forEach((boucle) => {

  gsap.to(boucle, {
    duration: 0.4,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: boucle,
      start: "top 80%",
      toggleActions: "play none none none"
    },
  });

});




//anim sondage

sondageAll.forEach((boucle) => {
  gsap.to(boucle, {
    scrollTrigger: {
      trigger: boucle,
      start: "top center",
      end: "90% 30%",
      toggleActions: "play restart play restart",
      onEnter: () => {
        boucle.classList.add("etoile--svg");
      },
      onLeave: () => {
        boucle.classList.remove("etoile--svg");
      },
    },
  });
});