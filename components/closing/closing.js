export function closingSectionAnimation() {
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
  }, "-=0.2");
}