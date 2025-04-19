//header aoarecer e desaparecer com scroll
let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


//botão voltar ao topo aparecer a partir da 'section services'
const backToTopBtn = document.querySelector('.back-to-top');
const servicesSection = document.querySelector('.services');

window.addEventListener('scroll', () => {
  const sectionTop = servicesSection.getBoundingClientRect().top;

  if (sectionTop <= 0) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
});


//Section com animação de entrada com scroll para baixo
const myObserver = new IntersectionObserver((entreies) =>{
    entreies.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("play")
        }
        else{
            entry.target.classList.remove("play")
        }
    })
})

const elements = document.querySelectorAll("section") 

elements.forEach((element) => myObserver.observe(element)
)