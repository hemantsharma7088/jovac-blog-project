'use strict';

/**
 * LIGHT & DARK MODE
 */

const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener("click", function () {

    // Toggles the dark and light theme
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {

      // Toggles the theme button to light or dark
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");

    }

  });

}





/**
 * MOBILE NAVBAR TOGGLE
 */

const mobileNav      = document.querySelector(".mobile-nav");
const navMenuBtn     = document.querySelector(".nav-menu-btn");
const navCloseBtn    = document.querySelector(".nav-close-btn");

const navToggleFunc = function () {
  mobileNav.classList.toggle("active");
}

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);
