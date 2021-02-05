// main.js

var volume = 100;
const input = document.querySelector('input');

const number = document.getElementById('volume-number');
input.addEventListener('input', updateSlider);

const slider = document.getElementById('volume-slider');
input.addEventListener('change', updateNumber);


function updateSlider(e) {
  slider.value = e.target.value;
  volume = e.target.value;
  updateImage();

}
function updateNumber(e) {
  number.value = e.target.value;
  volume = e.target.value;
  updateImage()
}

function updateImage() {

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
    audio.volume = volume;
    audio.play();
  });

