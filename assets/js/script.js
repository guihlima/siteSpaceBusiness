const desiredElement = document.getElementById('mainNav'); // elemento alvo
const pixelsAmount = '610'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
    	desiredElement.classList.add('changeStyle'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('changeStyle'); // remove classe "changeColor"
    }
});


// Fechar menu quando deslizar tela
const navbarToggle = document.querySelector(".navbar-collapse")

window.onscroll = ()=>{
    navbarToggle.classList.remove('show')
}