gsap.timeline({
    scrollTrigger: {
      trigger: ".method-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })

  // Título
  .from(".method-section h2", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  })

  // Itens
  .from(
    ".method-section .method-item",
    {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "transform",
    },
    "-=0.3"
  );

  gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })

  // Título
  .from(".services h2", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out",
  })

  // Cards
  .from(
    ".services .method-item",
    {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      clearProps: "transform",
    },
    "-=0.3"
  );