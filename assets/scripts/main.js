// main.js

var volume = 1;
const input = document.querySelector('input');

const number = document.getElementById('volume-number');
input.addEventListener('input', updateSlider);

const slider = document.getElementById('volume-slider');
input.addEventListener('onchange', updateNumber);

const level = document.getElementById('volume-image');
const horn = document.getElementById('sound-image');

function updateSlider(e) {
  slider.value = e.target.value;
  volume = e.target.value / 100;
  updateImage();

}
function updateNumber(e) {
  number.value = e.target.value;
  volume = e.target.value / 100;
  updateImage()
}

function updateImage() {
    var imageName = "";
    if (volume >= .67 && volume <= 1) {
        imageName = "volume-level-3.svg";
    } else if (volume >= .34 && volume <= .66) {
        imageName = "volume-level-2.svg";
    } else if (volume >= .01 && volume <= .33) {
        imageName = "volume-level-1.svg";
    } else {
        imageName = "volume-level-0.svg";
    }
    level.src = "./assets/media/icons/" + imageName;
}

//var form = document.querySelector("form");
// var form = document.querySelector("audio-selection");

// form.addEventListener("click", hey);
// function hey(e) {
//     const buttons = document.querySelectorAll('input[name="radio-sound"]');
//         let name = "";
//         for (const b of buttons) {
//             if (b.checked) {
//                 name = b.id;
//                 break;
//             }
//         }
//         horn.src = "./assets/media/images/" + sound.substr(6) + ".svg";
//     }
var r = document.querySelectorAll('input[name="radio-sound"]');
//r.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));
r.forEach(radio => radio.addEventListener('change', hey));
function hey(e) {
        let name = "";
        for (const b of r) {
            if (b.checked) {
                name = b.id;
                break;
            }
        }
        horn.src = "./assets/media/images/" + sound.substr(6) + ".svg";
    }

// var radios = document.querySelectorAll('input[type=radio][name="contact"]');
// radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));

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
    horn.src = "./assets/media/images/" + sound.substr(6) + ".svg";
    var filename = "./assets/media/audio/" + sound.substr(6) + ".mp3";
    var audio = new Audio(filename);
    audio.volume = volume;
    audio.play();
  });

