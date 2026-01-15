export function essenceSectionAnimation() {
  return gsap.timeline({
    scrollTrigger: {
      trigger: ".essence-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })
  .from(".essence-section .section-title", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  })
  .from(
    ".essence-section .essence-lead",
    {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.5"
  )
  .from(
    ".essence-section .essence-text",
    {
      opacity: 0,
      y: 20,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.5"
  );
}