const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

const carrusel = document.querySelector('.carrusel');
const flechaIzq = document.querySelector('.arrow.left');
const flechaDer = document.querySelector('.arrow.right');

flechaIzq.addEventListener('click', () => {
    carrusel.scrollBy({ left: -300, behavior: 'smooth' });
});

flechaDer.addEventListener('click', () => {
    carrusel.scrollBy({ left: 300, behavior: 'smooth' });
});