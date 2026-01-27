export function headerScript() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    if (scrollTop > 60) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');

  if (!mobileToggle || !nav) return;

  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    mobileToggle.classList.toggle('open');
  });

  const navLinks = nav.querySelectorAll('a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      mobileToggle.classList.remove('open');
    });
  });
}