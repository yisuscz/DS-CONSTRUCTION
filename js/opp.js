const slides = document.querySelectorAll('.carousel_slide');
const prev = document.querySelector('.carousel_btn.prev');
const next = document.querySelector('.carousel_btn.next');
let current = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prev.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    showSlide(current);
});

next.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    showSlide(current);
});
