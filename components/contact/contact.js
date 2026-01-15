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
      `Olá! Meu nome é ${nome}, meu email é ${email} e meu telefone é ${telefone}. ` +
      `Gostaria de conversar sobre vocês.`;

    const numeroWhatsApp = '5521985472151';
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
