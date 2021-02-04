// main.js

function changeSlider() {
    var x = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").innerHTML = x;
}



document.getElementById("honk-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var audio = new Audio("./assets/media/audio/air-horn.mp3");
    audio.play();
  });
// TODO
