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
        {transform: 'scale(1)'},
        {transform: 'scale(1.010)'}],
        {duration:1000, 
        direction:'alternate',
        iterations:Infinity})
}
const section1 = document.getElementById('s1')
const section2 = document.getElementById('s2')
const section3 = document.getElementById('s3')
const section4 = document.getElementById('s4')

scale(section1)
scale(section2)
scale(section3)
scale(section4)


