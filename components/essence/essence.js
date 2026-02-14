export function essenceSectionAnimation() {
  if (!document.querySelector('.essence-section')) return;

  // Set inicial - garante que começa invisível
  gsap.set(".section-title, .essence-lead, .essence-text, .pillar-card, .gallery-item", {
    autoAlpha: 0, // 👈 autoAlpha = opacity + visibility
    y: 30,
  });

  // Timeline
  gsap.timeline({
    scrollTrigger: {
      trigger: ".essence-section",
      start: "top 75%",
      once: true,
    },
  })
  .to(".section-title", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .to(".essence-lead", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.4")
  .to(".essence-text", {
    autoAlpha: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  }, "-=0.6")
  .to(".pillar-card", {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  }, "-=0.4")
  .to(".gallery-item", {
    autoAlpha: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.2)",
  }, "-=0.3");
}