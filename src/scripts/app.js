"use strict"

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const menuBurger = document.querySelector('.menu__icon');
const menu = document.querySelector('.nav')
const menu__lien = document.querySelectorAll('.menu__el')
const menuLinks = document.querySelectorAll('.menu__el a');

const parallaxEls = document.querySelectorAll(".ligne");

const accentAll = document.querySelectorAll("#recherches .paragraphe--accent");

const sondageImg = document.querySelectorAll(".sondage__el img");




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




//actif nav mobile
if (window.innerWidth < 619) {
  menuLinks.forEach((menuLink) => {

    window.addEventListener('scroll', () => {

      const activeSectionId = getActiveSectionId();


      if (menuLink.getAttribute('href') === `#${activeSectionId}`) {

        gsap.to(menuLink, { opacity: 1 });
      } else {

        gsap.to(menuLink, { opacity: 0.4});
      }
    });
  });


  function getActiveSectionId() {

    const sections = document.querySelectorAll('section');


    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        return section.id;
      }
    }

    return null;
  }
}



//nav bar hide

var menuHide = window.pageYOffset;
var delay = 0;
var duration = 0.6;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (menuHide > currentScrollPos) {
    setTimeout(function() {
      menu.style.transitionDuration = duration + "s";
      menu.style.top = "0";
    }, delay);
  } else {
    menu.style.transitionDuration = duration + "s";
    menu.style.top = "-72px";
  }
  menuHide = currentScrollPos;
};







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
if (window.innerWidth < 1000) {

  sondageImg.forEach((boucle) => {

    gsap.to(boucle, {

      scrollTrigger: {
        trigger: boucle,
        start: "top center",
        end: "90% 30%",
        onEnter: () => {
          boucle.classList.add("etoile--svg");
        },
        onLeave: () => {
          boucle.classList.remove("etoile--svg");
        },
        onEnterBack: () => {
          boucle.classList.add("etoile--svg");
        },
        onLeaveBack: () => {
          boucle.classList.remove("etoile--svg");
        },
      },

    });

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






// scroll section fonction

const contElement = document.querySelector('.cont');


const timeline = gsap.timeline();


ScrollTrigger.create({
  animation: timeline,
  trigger: '.cout .titre--small',
  start: 'top 55%',
  end: 'bottom 40%',
  ease: 'power4.inOut',
  toggleActions: 'play none reverse none',
  onEnter: () => {

    timeline.to(contElement, {
      y: '-93vh',
      duration: 0.4,
    });
  },
});


ScrollTrigger.create({
  animation: timeline,
  trigger: '.note .titre--small',
  start: 'top 55%',
  ease: 'power4.inOut',
  toggleActions: 'play none reverse none',
  onEnter: () => {

    timeline.to(contElement, {
      y: '-186vh',
      duration: 0.4,
    });
  },
});







//section video

gsap.to("#video", {

  scale:1.01,
  borderRadius: "0",

  scrollTrigger: {
    trigger: "#video",
    start: "top 90%",
    end: "70% 70%",
    scrub:true,
    toggleActions: "play restart play restart",
  },
});
