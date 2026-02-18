gsap.timeline({
    scrollTrigger: {
      trigger: ".formula-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })
  .from(".formula-section h2", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".formula-section > p",
    {
      opacity: 0,
      y: 25,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    },
    "-=0.4"
  )
  .from(
    ".formula-section h3",
    {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.2"
  )
  .from(
    ".formula-section li",
    {
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "transform",
    },
    "-=0.3"
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".causes-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })
  .from(".causes-section h2", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".causes-section .cause-item",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
      clearProps: "transform",
    },
    "-=0.3"
  );