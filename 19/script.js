// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}
