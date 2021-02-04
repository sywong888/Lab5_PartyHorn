// main.js

function changeSlider() {
    var x = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").innerHTML = x;
}



document.getElementById("honk-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var sound = selectSound();
    var filename = "./assets/media/audio/" + sound.substr(6) + ".mp3";
    var audio = new Audio(filename);
    audio.play();
  });

function selectSound() {
    const buttons = document.querySelectorAll('input[name="radio-sound"]');
    let name = "";
    for (const b of buttons) {
        if (rb.checked) {
            name = b.id;
        }
    }
    return name;
}

// var form = document.querySelector("form");
// var log = document.querySelector("#log");

// form.addEventListener("submit", function(event) {
//   var data = new FormData(form);
//   var output = "";
//   for (const entry of data) {
//     output = output + entry[0] + "=" + entry[1] + "\r";
//   };
//   log.innerText = output;
//   event.preventDefault();
// }, false);
// TODO
