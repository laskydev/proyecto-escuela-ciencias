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

//SIMPPLY COUNTODOWN
  
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){
    /*!
       * Project : simply-countdown
       * Date : 27/06/2015
       * License : MIT
       * Version : 1.5.0
       * Author : Vincent Loy <vincent.loy1@gmail.com>
       * Contributors :
       *  - Justin Beasley <JustinB@harvest.org>
       *  - Nathan Smith <NathanS@harvest.org>
       */
    var e=function(t,e,n){var o=document.createElement("div"),s=document.createElement("span"),r=document.createElement("span"),a=document.createElement("div");return a.appendChild(s),a.appendChild(r),o.appendChild(a),o.classList.add(e.sectionClass),o.classList.add(n),s.classList.add(e.amountClass),r.classList.add(e.wordClass),t.appendChild(o),{full:o,amount:s,word:r}};t.simplyCountdown=function(t,n){var o,s,r,a,d,c,i,l,u,m,p=function t(e){for(var n,o=e||{},s=1;s<arguments.length;s+=1){n=arguments[s];var r=Object.keys(n);if(r.length)for(var a=0;a<r.length;a+=1){var d=r[a];Object.prototype.hasOwnProperty.call(n,d)&&("object"===_typeof(n[d])?t(o[d],n[d]):o[d]=n[d])}}return o}({year:2015,month:6,day:28,hours:0,minutes:0,seconds:0,words:{days:"day",hours:"hour",minutes:"minute",seconds:"second",pluralLetter:"s"},plural:!0,inline:!1,enableUtc:!1,onEnd:function(){},refresh:1e3,inlineClass:"simply-countdown-inline",sectionClass:"simply-section",amountClass:"simply-amount",wordClass:"simply-word",zeroPad:!1,countUp:!1},n),y=document.querySelectorAll(t);r=new Date(p.year,p.month-1,p.day,p.hours,p.minutes,p.seconds),s=p.enableUtc?new Date(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds()):r,Array.prototype.forEach.call(y,function(t){var n,r=t,y=function(t,n){var o;return t.inline?((o=document.createElement("span")).classList.add(t.inlineClass),o):{days:e(n,t,"simply-days-section"),hours:e(n,t,"simply-hours-section"),minutes:e(n,t,"simply-minutes-section"),seconds:e(n,t,"simply-seconds-section")}}(p,r);(n=function(){var t,e,n,w,f=function(){i=parseInt(c/86400,10),c%=86400,l=parseInt(c/3600,10),c%=3600,u=parseInt(c/60,10),m=parseInt(c%60,10)};a=new Date,p.enableUtc?(d=new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()),c=(s-d.getTime())/1e3):c=(s-a.getTime())/1e3,c>0?f():p.countUp?(c=(a.getTime()-s)/1e3,f()):(i=0,l=0,u=0,m=0,window.clearInterval(o),p.onEnd()),p.plural?(t=i>1?p.words.days+p.words.pluralLetter:p.words.days,e=l>1?p.words.hours+p.words.pluralLetter:p.words.hours,n=u>1?p.words.minutes+p.words.pluralLetter:p.words.minutes,w=m>1?p.words.seconds+p.words.pluralLetter:p.words.seconds):(t=p.words.days,e=p.words.hours,n=p.words.minutes,w=p.words.seconds),p.inline?r.innerHTML="".concat(i," ").concat(t,", ")+"".concat(l," ").concat(e,", ")+"".concat(u," ").concat(n,", ")+"".concat(m," ").concat(w,"."):(y.days.amount.textContent=(p.zeroPad&&i.toString().length<2?"0":"")+i,y.days.word.textContent=t,y.hours.amount.textContent=(p.zeroPad&&l.toString().length<2?"0":"")+l,y.hours.word.textContent=e,y.minutes.amount.textContent=(p.zeroPad&&u.toString().length<2?"0":"")+u,y.minutes.word.textContent=n,y.seconds.amount.textContent=(p.zeroPad&&m.toString().length<2?"0":"")+m,y.seconds.word.textContent=w)})(),o=window.setInterval(n,p.refresh)})}}(window),window.jQuery&&function(t,e){t.fn.simplyCountdown=function(t){return function(t,n){e(t,n)}(this.selector,t)}}(jQuery,simplyCountdown);
    

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


