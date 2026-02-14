export function clientsCarousel() {
  const carousel = document.querySelector('.clients-logos');
  if (!carousel) return;

  carousel.innerHTML += carousel.innerHTML;

  let speed = 2;
  let position = 0;

  function animate() {
    position -= speed;

    if (position <= -carousel.scrollWidth / 2) {
      position = 0;
    }

    carousel.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();

  function animateCounter() {
    const counter = document.querySelector('.counter-number');
    if (!counter) return;
    
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target + '+';
      }
    };
    
    update();
  }

  return gsap.timeline({
    scrollTrigger: {
      trigger: ".clients-section",
      start: "top 75%",
      once: true,
    },
  })
  .from(".clients-section h2", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  })
  .from(
    ".clients-description",
    {
      opacity: 0,
      y: 25,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".clients-carousel-wrapper",
    {
      opacity: 0,
      y: 20,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(".clients-counter", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.4)",
    onComplete: animateCounter, // 👈 TEM QUE TER ISSO
  }, "-=0.4");
}