export function whatsappForm() {
  const button = document.getElementById('whatsapp-button');
  if (!button) return;

  button.addEventListener('click', () => {
    const nome = document.getElementById('nome')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const telefone = document.getElementById('telefone')?.value.trim();

    if (!nome || !email || !telefone) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const mensagem =
      `Fala, time Triaga! \n\n` +
      `Me chamo *${nome}* e sinto que temos uma sintonia cultural. \n` +
      `Meu contato é: ${email} | ${telefone}\n\n` +
      `Bora trocar uma ideia sobre como transformar minha marca em cultura e gerar impacto real juntos?`;

    const p1 = '5521';
    const p2 = '98547';
    const p3 = '2151';
    const numeroWhatsApp = p1 + p2 + p3;

    const url =
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });

  const contactForm = document.querySelector('.contact-form');
  const formElements = contactForm.querySelectorAll('input, button');

  gsap.from(document.querySelector('.contact-section h2'), {
    scrollTrigger: {
      trigger: '.contact-section',
      start: "top 85%"
    },
    y: 30,
    opacity: 0,
    duration: 0.7
  });

  gsap.from(formElements, {
    scrollTrigger: {
      trigger: contactForm,
      start: "top 85%"
    },
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.5,
    ease: "power1.out"
  });
}
