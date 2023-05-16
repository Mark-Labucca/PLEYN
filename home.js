const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
const slideWidth = slides.children[0].offsetWidth;

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.children.length - 1) {
    currentSlide++;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
});