export function closingSectionAnimation() {
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".closing-section",
      start: "top 50%",
      toggleActions: "play none none none",
    },
  })
  .from(".closing-section h2", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  })
  .from(
    ".closing-section p",
    {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    },
    "-=0.6"
  );
}
