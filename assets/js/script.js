const hamburgerBtn = document.getElementById("js-hamburger");
const topLine = document.getElementById("js-top-line");
const centerLine = document.getElementById("js-center-line");
const bottomLine = document.getElementById("js-bottom-line");
const nav = document.getElementById("js-nav");

hamburgerBtn.addEventListener("click", () => {
  topLine.classList.toggle("active");
  centerLine.classList.toggle("active");
  bottomLine.classList.toggle("active");
  nav.classList.toggle("show");
});
$("#js-hamburger").click(function () {
    $("#js-top-line").toggleClass("active");
    $("#js-center-line").toggleClass("active");
    $("#js-bottom-line").toggleClass("active");
    $("#js-nav").toggleClass("show");
  });