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
    duration: 2,
    ease: "power3.out",
  }, "-=0.7");

gsap.timeline({
  scrollTrigger: {
    trigger: ".method-section",
    start: "top 75%",
    toggleActions: "play none none none",
  },
})
.from(".method-section h2", {
  opacity: 0,
  y: 40,
  duration: 0.9,
  ease: "power3.out",
})
.from(
  ".method-section .method-item",
  {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  },
  "-=0.4"
);

gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 75%",
    toggleActions: "play none none none",
  },
})
.from(".projects-section h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
})
.from(
  ".projects-section .method-item",
  {
    opacity: 0,
    y: 35,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  },
  "-=0.4"
);

const TRIAGA_FOUNDATION_YEAR = 2022;

function initHeroStats() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - TRIAGA_FOUNDATION_YEAR;
  
  const yearsStat = document.querySelector('.stat-item:last-child .stat-number');
  if (yearsStat) {
    yearsStat.setAttribute('data-target', yearsInBusiness);
  }
  
  animateCounters();
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');

  document.querySelectorAll('.stat-number').forEach(counter => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const update = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + '+';
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + '+';
        }
      };
      
      // Inicia após 1.5s (depois das animações GSAP)
      setTimeout(update, 1500);
    });
  });
}

// Animação Method Section - CORRIGIDA
function methodSectionAnimation() {
  if (!document.querySelector('.method-section')) return;
  
  // Set inicial - garante que começa invisível
  gsap.set(".method-section h2, .method-item", {
    autoAlpha: 0,
    y: 30,
  });

  // Timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: ".method-section",
      start: "top 75%",
      once: true, // 👈 Anima só 1x
      // markers: true, // 👈 Descomente para debug
    },
  })
  .to(".method-section h2", {
    autoAlpha: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
  })
  .to(".method-item", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  }, "-=0.4");
}

document.addEventListener('DOMContentLoaded',  () => {
  initHeroStats();
  methodSectionAnimation();
});