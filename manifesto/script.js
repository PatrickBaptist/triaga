gsap.registerPlugin(ScrollTrigger);

// =====================
// MANIFESTO SECTION
// =====================

gsap.set([
  ".manifesto-title",
  ".manifesto-kicker",
  ".manifesto-text p",
], {
  autoAlpha: 0,
  y: 30
});


gsap.timeline({
  scrollTrigger: {
    trigger: ".manifesto-section",
    start: "top 75%",
    once: true
  }
})
.to(".manifesto-title", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  ease: "power3.out"
})
.to(".manifesto-kicker", {
  autoAlpha: 1,
  y: 0,
  duration: 0.6,
  ease: "power3.out"
}, "-=0.4")
.to(".manifesto-text p", {
  autoAlpha: 1,
  y: 0,
  duration: 0.75,
  stagger: 0.18,
  ease: "power3.out"
}, "-=0.2");

// =====================
// PURPOSE SECTION
// =====================

gsap.set([
  ".purpose-title",
  ".purpose-text"
], {
  autoAlpha: 0,
  y: 30
});


gsap.timeline({
  scrollTrigger: {
    trigger: ".purpose-section",
    start: "top 75%",
    once: true
  }
})
.to(".purpose-title", {
  autoAlpha: 1,
  y: 0,
  duration: 0.9,
  ease: "power3.out"
})
.to(".purpose-text", {
  autoAlpha: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.4");