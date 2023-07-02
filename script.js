const elementoAnimado = document.querySelector('.animacao-elemento');
let posicaoX = 0;
let posicaoY = 0;

setInterval(() => {
  posicaoX += 1;
  posicaoY += 1;
  elementoAnimado.style.left = posicaoX + 'px';
  elementoAnimado.style.top = posicaoY + 'px';
}, 10);

gsap.to(".animacao-elemento", { duration: 1, x: 100, y: 100 });
