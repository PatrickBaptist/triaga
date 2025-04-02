// Cursor personalizado
const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// Animações de scroll
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-content-main', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.hero-main',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.hero-content', {
    opacity: 0,
    y: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.service-item', {
    opacity: 0,
    y: 50,
    duration: 1.3,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
    }
});

// Animação das cards flutuantes
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    gsap.to(card, {
        y: () => gsap.utils.random(-50, 50),
        x: () => gsap.utils.random(-50, 50),
        rotation: () => gsap.utils.random(-15, 15),
        duration: () => gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: 'none',
        delay: index * 0.2
    });
});

// Menu Mobile
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abre/fecha o menu ao clicar no botão
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
        menuButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Desativa cursor personalizado em dispositivos touch
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    const cursorElement = document.querySelector('.cursor');
    if (cursorElement) {
        cursorElement.style.display = 'none';
    }
}

// Otimiza animações para mobile
const adjustAnimationsForMobile = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        gsap.set('.floating-cards', { display: 'none' });
    } else {
        gsap.set('.floating-cards', { display: 'flex' });
    }
};

adjustAnimationsForMobile();
window.addEventListener('resize', adjustAnimationsForMobile);
