// main.js

function changeSlider() {
    var x = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").innerHTML = x;
}
var volume = 100;


document.getElementById("volume-number").addEventListener("change", setVolume());

function setVolume() {
  volume = document.getElementById("volume-number").value;
  document.getElementById("volume-slider").innerHTML = x;
}



document.getElementById("honk-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var sound = (function() {
        const buttons = document.querySelectorAll('input[name="radio-sound"]');
        let name = "";
        for (const b of buttons) {
            if (b.checked) {
                name = b.id;
                break;
            }
        }
        return name;
    })();
    var filename = "./assets/media/audio/" + sound.substr(6) + ".mp3";
    var audio = new Audio(filename);
    audio.play();
  });

