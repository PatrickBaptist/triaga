gsap.timeline({
    scrollTrigger: {
      trigger: ".manifesto-section",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  })

  // Título
  .from(".manifesto-section .section-title", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: "power3.out",
  })

  // Kicker
  .from(
    ".manifesto-kicker",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.4"
  )

  // Texto do manifesto (parágrafo por parágrafo)
  .from(
    ".manifesto-text p",
    {
      opacity: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.18,
      ease: "power3.out",
    },
    "-=0.2"
  );