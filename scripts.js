if (localStorage.getItem('dark') === 'enabled') {
  document.body.classList.add('dark');
  chk.checked = true; // Assume que 'chk' é o seu checkbox
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  // Define os estilos para o tema escuro
  const darkStyles = {
    '*': { 'color': 'white' },
    'body': { 'background-color': '#232323' },
    '.logo': { 'color': ' rgba(255, 255, 255, 0.848)' },
    '.nav-item .nav-link': { 'color': ' rgba(255, 255, 255, 0.92)' },
    '.btn-navbar': { 'color': '' },
    '.heading-about': {'color' : 'rgb(255, 129, 57)'},
    '.label .ball': {'background-color':  '#232323'},
    '.label': {'background-color':  ' #E6E6E6'},
    '.para-home': { 'color': 'rgba(255, 255, 255, 0.42)' },
    '.home-links': { 'color': '' },
    '.home-links:hover': { 'background-color': 'white' },
    '.about-us': { 'background-color': 'rgb(54, 54, 54)' },
    '.para-about': { 'color': 'rgba(255, 255, 255, 0.695)' },
    '.card': { 'background-color': 'rgb(54, 54, 54)' },
    '.card-text': { 'color': 'rgba(255, 255, 255, 0.695)' },
    '.button-left': { 'color': 'rgba(255, 255, 255, 0.695)', 'background-color': 'rgb(54, 54, 54)' },
    '.button-right': { 'color': 'rrgba(255, 255, 255, 0.695)', 'background-color': 'rgb(54, 54, 54)' },
    'footer': { 'background-color': 'rgb(54, 54, 54)', 'color': 'white' },
    'footer .direita .links a': { 'color': ' #989898' },
    'footer .direita .links a:hover': { 'color': 'white' },
    'footer .direita p': { 'color': '#777' }
  };

  // Aplica ou remove os estilos do tema escuro
  for (const selector in darkStyles) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (chk.checked) {
        // Aplica os estilos do tema escuro
        for (const property in darkStyles[selector]) {
          el.style[property] = darkStyles[selector][property];
        }
      } else {
        // Remove os estilos do tema escuro
        for (const property in darkStyles[selector]) {
          el.style[property] = '';
        }
      }
    });
  }
});


document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    function changeActiveNav() {
      // Se estiver no topo da página, aplica a classe 'nav-link-select' ao primeiro link
      if (window.scrollY < 100) { // 100 é um valor de exemplo, ajuste conforme necessário
        navLinks.forEach(link => link.classList.remove('nav-link-select'));
        navLinks[0].classList.add('nav-link-select');
        return; // Sai da função para não executar o resto do código
      }
  
      let maxSection, maxSectionTop = 0;
      navLinks.forEach(item => {
        let target = document.querySelector(item.getAttribute('href'));
        let targetTop = target.getBoundingClientRect().top;
        if (targetTop < window.innerHeight && targetTop > maxSectionTop) {
          maxSection = item;
          maxSectionTop = targetTop;
        }
      });
  
      navLinks.forEach(item => item.classList.remove('nav-link-select'));
      if (maxSection) {
        maxSection.classList.add('nav-link-select');
      }
    }
  
    window.addEventListener('scroll', changeActiveNav);
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(node => node.classList.remove('nav-link-select'));
        this.classList.add('nav-link-select');
        let target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  