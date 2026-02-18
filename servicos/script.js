gsap.set(".method-section h2, .method-item", {
  autoAlpha: 0,
  y: 30,
});

// Timeline
gsap.timeline({
  scrollTrigger: {
    trigger: ".method-section",
    start: "top 75%",
    once: true,
  },
})
.to(".method-section h2", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  ease: "power3.out",
})
.to(".method-item", {
  autoAlpha: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
}, "-=0.4");
