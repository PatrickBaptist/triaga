export function closingSectionAnimation() {

  initClosingStats();

  gsap.set(".closing-section h2, .closing-subtitle, .closing-stats, .closing-ctas, .closing-quote", {
    autoAlpha: 0,
    y: 30,
  });
  
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".closing-section",
      start: "top 60%",
      once: true,
    },
  })
  .to(".closing-section h2", {
    autoAlpha: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  })
  .to(".closing-subtitle", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.5")
  .to(".closing-stats", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.4")
  .to(".closing-ctas", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.2)",
  }, "-=0.3")
  .to(".closing-quote", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.2")
  .to(".closing-stats", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    onComplete: animateCounters
  }, "-=0.4")
}

const TRIAGA_FOUNDATION_YEAR = 2022;

function initClosingStats() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - TRIAGA_FOUNDATION_YEAR;
  
  const yearsStat = document.querySelector('.closing-stat:last-child .stat-value');
  if (yearsStat) {
    yearsStat.setAttribute('data-target', yearsInBusiness);
  }
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-value');

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

    update();
  });;
}