var len = document.querySelector(".btn");
for (var x = 0; x < 3; x++) {
    document.querySelectorAll(".btn")[x].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);

        switch (text) {
            case "Bayna":
                var audio = new Audio("audios/Bayna.mp3");
                audio.play()
                break;

            case "BOSS":
                var audio = new Audio("audios/BOSS.mp3");
                audio.play()
                break;

            case "KGF":
                var audio = new Audio("audios/KGF.mp3");
                audio.play()
                break;
        }
    });
};







var len = document.querySelector(".btn");
for (var x = 0; x < 3; x++) {
    document.querySelectorAll(".btn")[x].addEventListener("click", function() {
        var text = this.innerHTML;
        console.log(text);
        audio(text)
    });
}

function audio(text) {
    switch (text) {
        case "Bayna":
            var audio = new Audio("audios/Bayna.mp3");
            audio.play()
            break;

        case "BOSS":
            var audio = new Audio("audios/BOSS.mp3");
            audio.play()
            break;

        case "KGF":
            var audio = new Audio("audios/KGF.mp3");
            audio.play()
            break;
    }
}