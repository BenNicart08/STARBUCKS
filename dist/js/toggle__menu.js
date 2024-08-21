const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const backDrop = document.querySelector(".backDrop");
const bodyScroll = document.querySelector("body");

toggleMenu.addEventListener("click", () => {
  // headerNav.classList.toggle("open");
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
  backDrop.classList.toggle("open");
  bodyScroll.classList.toggle("open");
});
