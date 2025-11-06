/* ===== MENU SHOW Y HIDDEN ===== */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navLink = document.querySelectorAll('.nav__link');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

/* ===== REMOVE MENU MOBILE ===== */
function linkAction() {
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ===== SCROLL REVEAL ANIMATION ===== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true,
});

sr.reveal(`.home__data, .home__img, 
           .about__container, .skills__container, 
           .work__container, .contact__container`, {
  interval: 200,
});
