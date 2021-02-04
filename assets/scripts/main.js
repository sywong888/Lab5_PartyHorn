// main.js

function changeSlider() {
    var x = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").innerHTML = x;
}


var button = document.getElementById('honk-btn'); // 

button.addEventListener('click', playSound); 
function playSound(){
    event.preventDefault();
    var audio = new Audio("./assets/media/audio/air-horn.mp3");
    audio.play();
}
// TODO
