let parallax = document.querySelector('.s1')
let titulo = document.querySelector('.titulo1')
function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translatey('+ scrollTop * -0.5 + 'px)';
    titulo.style.transform = 'translatey('+ scrollTop * 0.3 + 'px)';
}

window.addEventListener('scroll', scrollParallax)