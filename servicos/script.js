// Method Section Animation
gsap.set(".method-section h2, .method-item", {
  autoAlpha: 0,
  y: 30,
});

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

// Services Section Animation
gsap.set(".services h2, .services-subtitle, .service-card", {
  autoAlpha: 0,
  y: 40,
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top 75%",
    once: true,
  },
})
.to(".services h2", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  ease: "power3.out",
})
.to(".services-subtitle", {
  autoAlpha: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out",
}, "-=0.5")
.to(".service-card", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  stagger: 0.15,
  ease: "power3.out",
}, "-=0.4");

// Fit Section Animation
gsap.set(".fit-section h2, .fit-subtitle", {
  autoAlpha: 0,
  y: 40,
});

gsap.set(".fit-item", {
  autoAlpha: 0,
  y: 50,
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".fit-section",
    start: "top 75%",
    once: true,
  },
})
.to(".fit-section h2", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  ease: "power3.out",
})
.to(".fit-subtitle", {
  autoAlpha: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out",
}, "-=0.5")
.to(".fit-item", {
  autoAlpha: 0,
  y: 60,
  scale: 0.95,
  filter: "blur(4px)",
})
.to(".fit-item", {
  autoAlpha: 1,
  y: 0,
  scale: 1,
  filter: "blur(0px)",
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
}, "-=0.4");