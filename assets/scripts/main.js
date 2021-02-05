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

var hornType = "";
var buttons = document.querySelectorAll('input[name="radio-sound"]');
buttons.forEach(radio => radio.addEventListener('change', changeHorn));
function changeHorn(e) {
        for (const button of buttons) {
            if (button.checked) {
                hornType = button.id;
                hornType = hornType.substr(6)
                break;
            }
        }
        if (hornType == "car-horn") {
            horn.src = "./assets/media/images/car.svg";
        } else {
            horn.src = "./assets/media/images/" + hornType + ".svg";
        }
    }

document.getElementById("honk-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // var sound = (function() {
    //     const buttons = document.querySelectorAll('input[name="radio-sound"]');
    //     let name = "";
    //     for (const b of buttons) {
    //         if (b.checked) {
    //             name = b.id;
    //             break;
    //         }
    //     }
    //     return name;
    // })();
    var filename = "./assets/media/audio/" + hornType + ".mp3";
    var audio = new Audio(filename);
    audio.volume = volume;
    audio.play();
  });

