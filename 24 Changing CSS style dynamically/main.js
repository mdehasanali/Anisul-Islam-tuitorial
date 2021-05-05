// function addStyle() {
//     var myStyle = document.querySelector("#heading1");
//     myStyle.style.color = "blue";
//     myStyle.style.fontSize = "4rem";
//     myStyle.style.fontStyle = "italic";
//     myStyle.style.transform = "translate(100px)";
// }





// function addStyle() {
//     var myStyle = document.querySelector("#heading1");
//     myStyle.classList.add("style");
// }

// function removeStyle() {
//     var myStyle = document.querySelector("#heading1");
//     myStyle.classList.remove("style");
//     myStyle.style.transition = "all 1s"
// }




var myStyle = document.querySelector("#heading1");

function addStyle() {
    myStyle.classList.add("style");
}

function removeStyle() {
    myStyle.classList.remove("style");
    myStyle.style.transition = "all 1s"
}