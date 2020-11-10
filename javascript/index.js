//Declaramos las secciones de la pagina
const section1 = document.getElementById('s1')
const section2 = document.getElementById('s2')
const section3 = document.getElementById('s3')
const section4 = document.getElementById('s4')

//Declaramos los botones que hay en cada seccion
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')



//Funcion para dar el efecto parallax permanente
function scale(section){
    section.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(1.010)'}],
        {duration:1000, 
        direction:'alternate',
        iterations:Infinity})
    
}
//Funcion para que se mueva el botón de flecha que señala abajo
function buttonTranslate(button){
    button.animate([
        {transform: 'translateY(0)'},
        {transform: 'translateY(1rem)'}],
        {duration:1000, 
        direction:'alternate',
        iterations:Infinity})
}


//Inicializamos las funciones del parallax
scale(section1)
scale(section2)
scale(section3)
scale(section4)

buttonTranslate(btn1)
buttonTranslate(btn2)
buttonTranslate(btn3)
buttonTranslate(btn4)


