import { headerScript } from './components/header/header.js';
import { clientsCarousel } from './components/wework/wework.js';
import { whatsappForm } from './components/contact/contact.js';
import { pageHeroAnimation } from './components/banner/banner.js';
import { closingSectionAnimation } from './components/closing/closing.js';
import { essenceSectionAnimation } from './components/essence/essence.js';

function dividerAnimation() {
    gsap.from(".divider-gradient", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".divider-gradient",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }

document.addEventListener('DOMContentLoaded', () => {
  headerScript();
  clientsCarousel();
  whatsappForm();
  pageHeroAnimation();
  closingSectionAnimation();
  essenceSectionAnimation();
  dividerAnimation();
});
