// var len = document.querySelector(".btn");
// for (var x = 0; x < 3; x++) {
//     document.querySelectorAll(".btn")[x].addEventListener("click", function() {
//         var text = this.innerHTML;
//         console.log(text);

//         switch (text) {
//             case "Bayna":
//                 var audio = new Audio("audios/Bayna.mp3");
//                 audio.play()
//                 break;

//             case "BOSS":
//                 var audio = new Audio("audios/BOSS.mp3");
//                 audio.play()
//                 break;

//             case "KGF":
//                 var audio = new Audio("audios/KGF.mp3");
//                 audio.play()
//                 break;
//         }
//     });
// };







var len = document.querySelector(".btn");
for (var x = 0; x < 3; x++) {
    document.querySelectorAll(".btn")[x].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audio(text)
        audioAni(text)
    });
}

function audio(text) {
    switch (text) {
        case "Bayna":
            var audio = new Audio("audios/Bayna.mp3");
            audio.play()
            break;

        case "BOSS":
            var audio = new Audio("audios/BOSS.wav");
            audio.play()
            break;

        case "KGF":
            var audio = new Audio("audios/KGF.mp3");
            audio.play()
            break;
    }
}


function audioAni(text) {
    var selectAnim = document.querySelector("." + text);
    selectAnim.classList.add("animation");

    setTimeout(function() {
        selectAnim.classList.remove("animation");
    }, 5000);
}