console.log("indexTest")

window.onload = function() {
    document.querySelector('.myButton').onclick = function() {
        Game.init("canvas");
        document.querySelector('.footpong-intro').style.display = 'none'
    }



};




// Mejoras de Intro

// 1- Video Intro
// 2- Audio Intro
// 3- Start Button

// Mejoras de Desarrollo

// 1- tratar de que la pelota comience en posiciones distintas
// 2- posible animacion de los players