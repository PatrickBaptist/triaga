export function headerScript() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollTop = 0;

  // Scroll behavior
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Hide/show header
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    // Shrink header
    if (scrollTop > 60) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Mobile menu
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const backdrop = document.querySelector('.nav-backdrop'); // 👈 NOVO

  if (!mobileToggle || !nav) return;

  // Toggle menu
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    mobileToggle.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('active'); // 👈 NOVO
    
    // Previne scroll do body quando menu aberto // 👈 NOVO
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  });

  // Fecha menu ao clicar no backdrop // 👈 NOVO
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      nav.classList.remove('open');
      mobileToggle.classList.remove('open');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Fecha menu ao clicar nos links
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      mobileToggle.classList.remove('open');
      if (backdrop) backdrop.classList.remove('active'); // 👈 NOVO
      document.body.style.overflow = ''; // 👈 NOVO
    });
  });

  // Active link detection (opcional - para SPAs) // 👈 NOVO
  updateActiveLink();
}

// Detecta link ativo baseado na URL // 👈 NOVO
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav .link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === currentPath || 
        (href.includes('#') && currentPath === '/') ||
        (currentPath.includes(href) && href !== '#hero')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}