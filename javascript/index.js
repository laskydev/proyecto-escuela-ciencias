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
const btnu1 = document.getElementById('btnu1')
const btnu2 = document.getElementById('btnu2')
const btnu3 = document.getElementById('btnu3')
const btnu4 = document.getElementById('btnu4')



//Tratando de desactivar el Scroll
function disableScroll() { document.body.style.overflow="hidden";  }
function enableScroll() { document.body.style.overflow="initial";  }

disableScroll();


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
        {duration:500, 
        direction:'alternate',
        iterations:Infinity})
}

//Función para que se mueva el boton de flecha que señala hacia arriba
function buttonTranslateUp(button1){
    button1.animate([
        {transform: 'translateY(1rem)'},
        {transform: 'translateY(0)'}],
        {duration:500, 
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
buttonTranslateUp(btnu1)
buttonTranslateUp(btnu2)
buttonTranslateUp(btnu3)
buttonTranslateUp(btnu4)

// COUNTDOWN
  // This is an example with default parameters

  simplyCountdown('#cuenta', {
    year: 2035, // required
    month: 0, // required
    day: 0, // required
    hours: 0, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});


//Direccionar paginas

function OCDE (){
    window.open('http://www.oecd.org/centrodemexico/medios/haciaunaeconomiaverdepoliticasparaenfrentarelcambioclimatico.htm#:~:text=Sin%20nuevas%20pol%C3%ADticas%20efectivas%2C%20la,6%20grados%20cent%C3%ADgrados%20para%202100.');
}

function OMS (){
    window.open('https://www.who.int/topics/climate/es/');
}

function OLADE (){
    window.open('http://biblioteca.olade.org/opac-tmpl/Documentos/old0357.pdf');
}


