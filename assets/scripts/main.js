// main.js

function changeSlider() {
    var x = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").innerHTML = x;
}



document.getElementById("honk-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("start");
    var sound = (function() {
        alert("heyyo");
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
