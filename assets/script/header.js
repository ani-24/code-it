const hamburger = document.querySelector(".hamburger");
const fullscreennav = document.querySelector(".full-screen-navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("cross");
  fullscreennav.classList.toggle("show");
});
