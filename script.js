//offer section
let close = document.getElementById("close");
let offer_section = document.getElementById("offer-section");

close.addEventListener("click", function () {
  offer_section.style.display = "none";
});

let menu = document.getElementById("menu");
let side_nav_close = document.getElementById("side-nav-close");
let side_navbar = document.getElementById("side-navbar");

menu.addEventListener("click", function () {
  side_navbar.style.left = "0";
});

side_nav_close.addEventListener("click", () => {
  side_navbar.style.left = "-60%";
});

const sliderTrack = document.querySelector(".slider");
const leftBtn = document.querySelector(".slider-left-activate");
const rightBtn = document.querySelector(".slider-right-activate");

let slideIndex = 0;
const totalSlides = document.querySelectorAll(".slider img").length;

rightBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
});

leftBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  sliderTrack.style.transform = `translateX(-${slideIndex * 33.33}%)`;
}
