export function whatsappForm() {
  const form = document.getElementById('contact-form');
  const button = document.getElementById('whatsapp-button');
  const successMessage = document.getElementById('form-success');
  
  if (!form || !button) return;

  // =====================
  // VALIDAÇÃO EM TEMPO REAL
  // =====================
  
  const inputs = {
    nome: document.getElementById('nome'),
    email: document.getElementById('email'),
    telefone: document.getElementById('telefone')
  };

  // Valida nome
  function validateNome(value) {
    if (!value.trim()) {
      return 'Nome é obrigatório';
    }
    if (value.trim().length < 3) {
      return 'Nome deve ter pelo menos 3 caracteres';
    }
    return null;
  }

  // Valida email
  function validateEmail(value) {
    if (!value.trim()) {
      return 'Email é obrigatório';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Email inválido';
    }
    return null;
  }

  // Valida telefone
  function validateTelefone(value) {
    if (!value.trim()) {
      return 'Telefone é obrigatório';
    }
    const numbers = value.replace(/\D/g, '');
    if (numbers.length < 10) {
      return 'Telefone inválido';
    }
    return null;
  }

  // Aplica máscara de telefone
  function maskTelefone(value) {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  }

  // Mostra erro
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.add('error');
    input.classList.remove('success');
    
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
  }

  function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    input.classList.remove('error');
    input.classList.add('success');
    
    if (errorElement) {
      errorElement.classList.remove('show');
    }
  }

  // Event listeners de validação
  inputs.nome.addEventListener('blur', () => {
    const error = validateNome(inputs.nome.value);
    if (error) {
      showError(inputs.nome, error);
    } else {
      clearError(inputs.nome);
    }
  });

  inputs.email.addEventListener('blur', () => {
    const error = validateEmail(inputs.email.value);
    if (error) {
      showError(inputs.email, error);
    } else {
      clearError(inputs.email);
    }
  });

  inputs.telefone.addEventListener('input', (e) => {
    e.target.value = maskTelefone(e.target.value);
  });

  inputs.telefone.addEventListener('blur', () => {
    const error = validateTelefone(inputs.telefone.value);
    if (error) {
      showError(inputs.telefone, error);
    } else {
      clearError(inputs.telefone);
    }
  });

  // =====================
  // SUBMIT DO FORMULÁRIO
  // =====================
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = inputs.nome.value.trim();
    const email = inputs.email.value.trim();
    const telefone = inputs.telefone.value.trim();

    const nomeError = validateNome(nome);
    const emailError = validateEmail(email);
    const telefoneError = validateTelefone(telefone);

    if (nomeError) showError(inputs.nome, nomeError);
    if (emailError) showError(inputs.email, emailError);
    if (telefoneError) showError(inputs.telefone, telefoneError);

    if (nomeError || emailError || telefoneError) {
      return;
    }

    const mensagem =
      `Fala, time Triaga! 🚀\n\n` +
      `Me chamo *${nome}* e sinto que temos uma sintonia cultural.\n` +
      `Meu contato é: ${email} | ${telefone}\n\n` +
      `Bora trocar uma ideia sobre como transformar minha marca em cultura e gerar impacto real juntos?`;

    const p1 = '5521';
    const p2 = '98547';
    const p3 = '2151';
    const numeroWhatsApp = p1 + p2 + p3;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    if (successMessage) {
      successMessage.style.display = 'flex';
      
      gsap.to(successMessage, {
        autoAlpha: 1,
        duration: 0.4,
        ease: 'power3.out'
      });

      setTimeout(() => {
        window.open(url, '_blank');
        
        setTimeout(() => {
          form.reset();
          inputs.nome.classList.remove('success');
          inputs.email.classList.remove('success');
          inputs.telefone.classList.remove('success');
          
          gsap.to(successMessage, {
            autoAlpha: 0,
            duration: 0.3,
            onComplete: () => {
              successMessage.style.display = 'none';
            }
          });
        }, 1000);
      }, 2000);
    } else {
      window.open(url, '_blank');
      form.reset();
    }
  });
  gsap.set([
    '.contact-header h2',
    '.contact-subtitle',
    '.contact-form-wrapper',
    '.contact-info'
  ], {
    autoAlpha: 0,
    y: 30
  });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 70%',
      once: true
    }
  })
  .to('.contact-header h2', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .to('.contact-subtitle', {
    autoAlpha: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out'
  }, '-=0.5')
  .to('.contact-form-wrapper', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.contact-info', {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from('.info-card', {
    autoAlpha: 0,
    x: -20,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power3.out'
  }, '-=0.4');
}