const logoContainer = document.querySelector('.logo');

logoContainer.addEventListener('click', () => {
  window.location.href = 'index.html';
});

const navegation = document.querySelectorAll('.btn-nav');
const video = document.querySelector('.video-slide');

navegation.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    navegation.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    changeVideo(index);
  });
});

function changeVideo(i) {
  video.classList.add('fade-out');

  setTimeout(() => {
    video.src = `videos/${i}.mp4`;
    video.load();
    video.classList.remove('fade-out');
    video.classList.add('fade-in');
  }, 500);
}


const btnIzquierda = document.getElementById('btnizp');
const btnDerecha = document.getElementById('btnder');
const contenidoTarjetas = document.querySelector('.Cardcontend');

if (btnDerecha && btnIzquierda && contenidoTarjetas) {
  btnDerecha.addEventListener('click', () => {
    contenidoTarjetas.scrollBy({ left: 300, behavior: 'smooth' });
  });

  btnIzquierda.addEventListener('click', () => {
    contenidoTarjetas.scrollBy({ left: -300, behavior: 'smooth' });
  });
}