const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const moblieMenu = document.querySelector(".mobile_menu");
const topView = document.getElementById("top");
const body = document.getElementById("body");
const header = document.getElementById("header");

hamburger.addEventListener("click", function() {
  moblieMenu.classList.add("visible");
});

close.addEventListener("click", function() {
  moblieMenu.classList.remove("visible");
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  header: "[data-scroll-header]"
});

/* body.addEventListener("scroll", function() {
  console.log(document.body.scrollHeight);
});

if (window.pageYOffset > 200) {
  topView.classList.add("visible");
} */

window.addEventListener("scroll", function() {
  console.log(pageYOffset + "px");
  if (window.pageYOffset > 500) {
    topView.classList.add("topShow");
  } else {
    topView.classList.remove("topShow");
  }

  if (window.pageYOffset > 100 && window.innerWidth < 992) {
    header.classList.add("header_fixed");
  } else {
    header.classList.remove("header_fixed");
  }
});

document.addEventListener("scrollStop", function() {
  moblieMenu.classList.remove("visible");
});
