const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-ul__mob');
const navList = document.querySelector('.nav-list');
function Menu() {
   hamburger.classList.add('open');
   nav.classList.add('open');
   navList.classList.add('hiden');
 }
function closeMenu() {
   const navLinks = document.querySelectorAll('.nav-link');
   navLinks.forEach((el) => el.addEventListener('click, closeMenu'));
}
function closeMenu(event) {
   if (event.target.classList.contains('nav-link')) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      navList.classList.remove('hiden');
   }
 }
 nav.addEventListener('click', closeMenu);
 hamburger.addEventListener('click', Menu);