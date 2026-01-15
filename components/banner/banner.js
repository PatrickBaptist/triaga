export function pageHeroAnimation() {
  return gsap.timeline()
    .from(".page-hero h1", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power3.out",
    })
    .from(
      ".page-hero p",
      {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power3.out",
      },
      "-=0.7"
    )
    .from(
    ".cta-button",
    {
      scale: 0.2,
      opacity: 0,
      duration: 0.1,
      ease: "back.out(1.7)",
      clearProps: "transform"
    },
    "-=0.4"
  );
}
