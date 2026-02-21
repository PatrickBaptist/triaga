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
      
      setTimeout(update, 1500);
    });
  });
}

// Animação Method Section
function methodSectionAnimation() {
  if (!document.querySelector('.method-section')) return;
  
  gsap.set(".method-section h2, .method-item", {
    autoAlpha: 0,
    y: 30,
  });

  // Timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: ".method-section",
      start: "top 75%",
      once: true,
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

function projectsSectionAnimation() {
  if (!document.querySelector('.projects-section')) return;

  // Set inicial - garante que começa invisível
  gsap.set(".projects-section h2, .project-item", {
    autoAlpha: 0,
    y: 40,
  });

  // Timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-section",
      start: "top 75%",
      once: true,
    },
  })
  .to(".projects-section h2", {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  })
  .to(".project-item", {
    autoAlpha: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  }, "-=0.4");
}

window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    if (window.scrollY > 100) {
      gsap.to(scrollIndicator, {
        autoAlpha: 0,
        duration: 0.3
      });
    } else {
      gsap.to(scrollIndicator, {
        autoAlpha: 0.6,
        duration: 0.3
      });
    }
  }
});

document.addEventListener('DOMContentLoaded',  () => {
  initHeroStats();
  methodSectionAnimation();
  projectsSectionAnimation();
});