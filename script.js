window.addEventListener('load', () => {

    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .cta-button, .btn-contact').forEach(el => {
            el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            });
        });
        
        // Esconder quando digitar (input, textarea)
        document.querySelectorAll('input, textarea').forEach(el => {
            el.addEventListener('focus', () => {
            cursor.classList.add('hidden');
            });
            el.addEventListener('blur', () => {
            cursor.classList.remove('hidden');
            });
        });
    }

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('text-selecting');
    });

    document.addEventListener('mouseup', () => {
        button.classList.remove('text-selecting');
    });

    // Se o botão for focável (ex: com Tab), adiciona classe ao focar
    button.addEventListener('focus', () => {
        button.classList.add('text-selecting');
    });

    button.addEventListener('blur', () => {
        button.classList.remove('text-selecting');
    });
    });

    // Animações de scroll
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.purpose-section', { opacity: 0, y: 50, duration: 1 });
    gsap.from('.services', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
    gsap.from('.clients-section', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.causes-section', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.testimonials-section', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('.contact-section', { opacity: 0, y: 50, duration: 1, delay: 1.2 });
    gsap.from('.hero', { opacity: 0, y: 50, duration: 1 });

    // Animação das cards flutuantes
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.to(card, {
            y: () => gsap.utils.random(-50, 50),
            x: () => gsap.utils.random(-50, 50),
            rotation: () => gsap.utils.random(-15, 15),
            duration: () => gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            ease: 'none',
            delay: index * 0.2
        });
    });

    // Desativa cursor personalizado em dispositivos touch
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        const cursorElement = document.querySelector('.cursor');
        if (cursorElement) {
            cursorElement.style.display = 'none';
        }
    }

    const backToTopButton = document.getElementById('backToTop');

    backToTopButton.addEventListener('click', () => {
        console.log('Botão "voltar ao topo" clicado');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mostrar/esconder botão conforme o scroll
    window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
    });

    // Scroll suave ao clicar
    backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    gsap.registerPlugin(ScrollTrigger);

    // Adicionando animação ao clicar no botão para rolar até o topo
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.querySelector('#backToTop');
      
        if (button) {
          button.addEventListener('click', () => {
            gsap.to(window, { scrollTo: 0, duration: 1 });  // Rolagem suave para o topo
          });
        } else {
          console.error('Botão "Voltar ao Topo" não encontrado');
        }
      
        // Controlar a visibilidade do botão com o scroll
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) { // Exibe o botão após rolar 300px
            button.className.add('show');
          } else {
            button.className.remove('show');
          }
        });
      });
    
    // Exibir o botão quando o usuário rolar para baixo
    window.addEventListener('scroll', () => {
      const button = document.querySelector('#backToTop');
      if (window.scrollY > 300) { // Exibir o botão depois de 300px de rolagem
        button.className.add('show'); // Adiciona a classe show para a animação de fade-in
      } else {
        button.className.remove('show'); // Remove a classe show para fazer fade-out
      }
    });
    
    // ScrollTrigger para esconder o cabeçalho nas seções
    let header = document.querySelector('.site-header');
    
    ScrollTrigger.create({
      trigger: ".purpose-section",
      start: "top top", // Início do scroll na seção hero
      end: "+=100%", // Duração até o fim da hero
      onEnter: () => header.className.add("hidden"), // Quando a hero entrar na tela, o cabeçalho some
      onLeaveBack: () => header.className.remove("hidden"), // Quando voltar para cima da hero, o cabeçalho aparece
      markers: true, // Usado para ver os pontos de marcação, pode ser removido após testar
    });
    
    ScrollTrigger.create({
      trigger: ".purpose-section",
      start: "top top", // Início do scroll na seção services
      end: "+=100%", // Duração até o fim da services
      onEnter: () => header.className.add("hidden"), // Quando a services entrar na tela, o cabeçalho some
      onLeaveBack: () => header.className.remove("hidden"), // Quando voltar para cima da services, o cabeçalho aparece
      markers: true, // Usado para ver os pontos de marcação, pode ser removido após testar
    });
});