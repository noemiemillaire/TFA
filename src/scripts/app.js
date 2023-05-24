"use strict"

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const menuBurger = document.querySelector('.menu__icon');
const menu = document.querySelector('.nav')
const menu__lien = document.querySelectorAll('.menu__el')

const parallaxEls = document.querySelectorAll(".ligne");

const accentAll = document.querySelectorAll("#recherches .paragraphe--accent");

const sondageEl = document.querySelectorAll(".sondage__el");
const sondageImg = document.querySelectorAll(".sondage__el img");

const sectVideo = document.querySelector('#video')



//burger menu

menuBurger.addEventListener('click', function(){
    menu.classList.toggle('menu--open');
})

  //enlever menu au click
menu__lien.forEach((lien) => {

  lien.addEventListener('click', function(){
    menu.classList.remove('menu--open');
  })

});




//nav bar

var menuHide = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (menuHide > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-65px";
  }
  menuHide = currentScrollPos;
}




//parallax grille

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




//anim texte accent

accentAll.forEach((boucle) => {

  gsap.to(boucle, {
    duration: 0.4,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: boucle,
      start: "top 75%",
      toggleActions: "play none none none"
    },
  });

});




//anim sondage

sondageImg.forEach((boucle) => {

  gsap.to(boucle, {

    scrollTrigger: {
      trigger: boucle,
      start: "top center",
      end: "90% 30%",
      toggleActions: "play restart reverse reset",
      onEnter: () => {
        boucle.classList.add("etoile--svg");
      },
      onLeave: () => {
        boucle.classList.remove("etoile--svg");
      },
    },

  });

});


//stop scroll sondage desktop
if (window.innerWidth > 1000) {

  gsap.to("#sondage", {

    scrollTrigger: {
      trigger: "#sondage",
      start: "center center",
      pin: true,
      toggleActions: "play play play play",
      snap: {
        snapTo: "center",
        duration: 0.5,
      },
    },
    
  });

}




//sondage desktop

  //selection btn
const btnEuro = document.querySelector('.euro');
const btnNaturel = document.querySelector('.naturel');
const btnPlanet = document.querySelector('.planet');
const btnInterro = document.querySelector('.interrogation');

  //selection contenu
const txtEuro = document.querySelector('.euro--txt');
const txtNaturel = document.querySelector('.naturel--txt');
const txtPlanet = document.querySelector('.planet--txt');
const txtInterro = document.querySelector('.interrogation--txt');


const elements = [txtEuro, txtNaturel, txtPlanet, txtInterro];
const btnElements = [btnEuro, btnNaturel, btnPlanet, btnInterro];


function hideAllElements() {
  elements.forEach(function(element) {
    element.classList.remove('visible');
    element.classList.remove('etoile--svg');
  });

  btnElements.forEach(function(btnelement) {
    btnelement.classList.remove('etoile--svg');
  });
}

btnEuro.addEventListener('click', function() {
  hideAllElements();
  txtEuro.classList.add('visible');
  btnEuro.classList.add('etoile--svg');
});

btnNaturel.addEventListener('click', function() {
  hideAllElements();
  txtNaturel.classList.add('visible');
  btnNaturel.classList.add('etoile--svg');
});

btnPlanet.addEventListener('click', function() {
  hideAllElements();
  txtPlanet.classList.add('visible');
  btnPlanet.classList.add('etoile--svg');
});

btnInterro.addEventListener('click', function() {
  hideAllElements();
  txtInterro.classList.add('visible');
  btnInterro.classList.add('etoile--svg');
});



//section video

gsap.to(sectVideo, {

  scale: 1.1,
  borderRadius: "0%",

  scrollTrigger: {
    trigger: sectVideo,
    start: "top 90%",
    end: "center center",
    scrub:true,
    toggleActions: "play restart play restart",
  },
});