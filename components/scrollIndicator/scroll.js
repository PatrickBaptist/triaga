export function scrollScript() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.set([
      ".scroll-indicator",
    ], {
      autoAlpha: 0,
      y: 30
    });
    
    // =====================
    // HERO ANIMATION
    // =====================
    
    gsap.timeline({
      delay: 0.3
    })
    .to(".scroll-indicator", {
      autoAlpha: 0.6,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");
    
    window.addEventListener('scroll', () => {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        if (window.scrollY > 100) {
          gsap.to(scrollIndicator, {
            autoAlpha: 0,
            duration: 0.3
          });
        } else {
          gsap.to(scrollIndicator, {
            autoAlpha: 0.6,
            duration: 0.3
          });
        }
      }
    });
}