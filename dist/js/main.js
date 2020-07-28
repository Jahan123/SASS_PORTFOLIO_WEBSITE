const menuBtn = document.querySelector(".menu-btn");
const menuBtn__burger = document.querySelector(".menu-btn__burger");
const navBtn = document.querySelector("nav");
const navMenuItem = document.querySelectorAll(".nav-menu__item");
menuBtn.addEventListener("click", () => {
  if (
    !menuBtn__burger.classList.contains("open") &&
    !navBtn.classList.contains("open")
  ) {
    menuBtn__burger.classList.add("open");
    navBtn.classList.add("open");
    navMenuItem.forEach((item) => {
      item.classList.add("open");
    });
  } else {
    menuBtn__burger.classList.remove("open");
    navBtn.classList.remove("open");
    navMenuItem.forEach((item) => {
      item.classList.remove("open");
    });
    console.log(navBtn.classList);
  }
});
