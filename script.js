const mobileToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  mobileToggle.classList.toggle('open');
});

// Carrossel infinito de logos de clientes
const carousel = document.querySelector('.clients-logos');

carousel.innerHTML += carousel.innerHTML;

let speed = 2;
let position = 0;

function animateCarousel() {
  position -= speed;
  
  if (position <= -carousel.scrollWidth / 2) {
    position = 0;
  }
  
  carousel.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

const whatsappButton = document.getElementById('whatsapp-button');

// Função para enviar mensagem via WhatsApp
whatsappButton.addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  if (!nome || !email || !telefone) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  const mensagem = `Olá! Meu nome é ${nome}, meu email é ${email} e meu telefone é ${telefone}. Gostaria de conversar sobre vocês.`;
  
  const numeroWhatsApp = '5521985472151';
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
});
