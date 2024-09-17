const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselContainer = document.querySelector(".carousel-container");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carouselContainer.children.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < carouselContainer.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const width = carouselContainer.clientWidth;
  carouselContainer.style.transform = `translateX(-${width * currentIndex}px)`;
}
