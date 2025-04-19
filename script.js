  //header aparecer e desaparecer com scroll
  let lastScrollTop = 0;
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > lastScrollTop) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  });

// Animações de entrada mais variadas para cada seção
gsap.registerPlugin(ScrollTrigger);

// Animação da hero section
gsap.timeline()
  .from(".hero h1", {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: "power3.out",
  })
  .from(".hero p", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
  }, "-=0.7")
  .from(".cta-button", {
    scale: 0.9,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
  }, "-=0.6");

// Animações específicas para cada seção
// Services section
gsap.utils.toArray('.service-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: index * 0.15,
    ease: "power2.out"
  });
});

// Purpose section
gsap.from(".purpose-section h2", {
  scrollTrigger: {
    trigger: ".purpose-section",
    start: "top 80%",
  },
  x: -50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".purpose-section p", {
  scrollTrigger: {
    trigger: ".purpose-section p",
    start: "top 85%",
  },
  y: 30,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

// Causes section - animação em cascata
gsap.utils.toArray('.cause-item').forEach((cause, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: cause,
      start: "top 85%"
    }
  });
  
  tl.from(cause.querySelector('h4'), {
    y: 20,
    opacity: 0,
    duration: 0.5
  }).from(cause.querySelectorAll('p'), {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.2");
});

// Testimonials com aparecimento suave
gsap.utils.toArray('.testimonial-item').forEach((testimonial, index) => {
  gsap.from(testimonial, {
    scrollTrigger: {
      trigger: testimonial,
      start: "top 85%"
    },
    scale: 0.9,
    opacity: 0,
    duration: 0.7,
    delay: index * 0.2,
    ease: "power1.out"
  });
});

// Formulário de contato
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

// Carrossel de clientes melhorado
const carousel = document.querySelector(".clients-logos");
let speed = 0.5;
let currentX = 0;
let isHovered = false;
let isPaused = false;

if (carousel) {
  const logos = Array.from(carousel.children);
  
  // Garantir que temos imagens suficientes para um loop suave
  const logoWidth = logos[0].offsetWidth;
  const containerWidth = carousel.parentElement.offsetWidth;
  const logosNeeded = Math.ceil(containerWidth / logoWidth) * 2;
  
  // Adicionar logos suficientes para preencher o container
  for (let i = 0; i < logosNeeded; i++) {
    carousel.appendChild(logos[i % logos.length].cloneNode(true));
  }
  
  // Animação do carrossel
  const animate = () => {
    if (!isPaused && !isHovered) {
      currentX -= speed;
      // Reset quando o primeiro conjunto completo de logos passar
      if (Math.abs(currentX) >= logoWidth * logos.length) {
        currentX = 0;
      }
      carousel.style.transform = `translateX(${currentX}px)`;
    }
    requestAnimationFrame(animate);
  };
  
  // Iniciar animação
  animate();
  
  // Parar quando o mouse estiver sobre um logo
  carousel.addEventListener('mouseenter', () => {
    isHovered = true;
  });
  
  carousel.addEventListener('mouseleave', () => {
    isHovered = false;
  });
  
  // Efeito nos logos ao passar o mouse
  document.querySelectorAll(".clients-logos img").forEach((logo) => {
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, { 
        scale: 1.2, 
        rotate: 5, 
        duration: 0.3, 
        ease: "power1.out",
        filter: "brightness(1.2)"
      });
    });
    
    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, { 
        scale: 1.0, 
        rotate: 0, 
        duration: 0.3, 
        ease: "power1.out",
        filter: "brightness(1)"
      });
    });
  });
}

// Botão "Voltar ao topo" com funcionalidade e animação aprimoradas
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 600) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Espera o scroll suave terminar e esconde
  setTimeout(() => {
    if (window.scrollY <= 10) {
      backToTopBtn.classList.remove('visible');
    }
  }, 600); // ajustar se necessário
});


  // Efeitos interativos para melhorar a experiência do usuário
document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos cards de serviço
    gsap.utils.toArray('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
    
    // Efeito de parallax no fundo da hero section
    gsap.to('.hero', {
      backgroundPositionY: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
      
      cause.addEventListener('mouseleave', () => {
        gsap.to(cause, {
          backgroundColor: 'transparent',
          borderLeftWidth: '0px',
          paddingLeft: '15px',
          duration: 0.3
        });
      });
    });
    
    // Adicionar efeito de typing na headline do hero
    const heroHeadline = document.querySelector('.hero h1');
    if (heroHeadline) {
      const originalText = heroHeadline.innerHTML;
      const highlightedText = heroHeadline.querySelector('.highlight-triaga').textContent;
      
      // Remover o texto original
      heroHeadline.innerHTML = '';
      
      // Configurar o texto base sem a palavra destacada
      const baseText = originalText.replace(`<span class="highlight-triaga">${highlightedText}</span>`, '');
      const parts = baseText.split('');
      
      // Criar timeline de typing
      const typingTimeline = gsap.timeline({
        onComplete: () => {
          // Adicionar a palavra destacada com efeito especial
          const highlightSpan = document.createElement('span');
          highlightSpan.className = 'highlight-triaga';
          highlightSpan.textContent = highlightedText;
          heroHeadline.appendChild(highlightSpan);
          
          gsap.from(highlightSpan, {
            scale: 1.2,
            color: '#fff',
            textShadow: '0 0 20px #6659b0',
            duration: 0.8,
            ease: 'power2.out'
          });
        }
      });
      
      // Adicionar cada letra com delay
      parts.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        heroHeadline.appendChild(span);
        
        typingTimeline.from(span, {
          opacity: 0,
          duration: 0.05,
          ease: 'none'
        }, index * 0.03);
      });
    };