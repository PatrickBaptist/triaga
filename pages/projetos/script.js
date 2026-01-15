gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 75%",
    toggleActions: "play none none none",
  },
})
.from(".projects-section h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out",
})
.from(
  ".projects-section .method-item",
  {
    opacity: 0,
    y: 35,
    duration: 0.9,
    stagger: 0.2,
    ease: "power3.out",
  },
  "-=0.4"
);