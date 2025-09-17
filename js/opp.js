const track = document.querySelector('.image-carousel .carousel-track');
const prevBtn = document.querySelector('.image-carousel .carousel-nav.prev');
const nextBtn = document.querySelector('.image-carousel .carousel-nav.next');
const items = document.querySelectorAll('.image-carousel .carousel-item');
let visibleItems = window.innerWidth <= 600 ? 1 : 3;
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('resize', () => {
  visibleItems = window.innerWidth <= 600 ? 1 : 3;
  currentIndex = 0;
  updateCarousel();
});

updateCarousel();
