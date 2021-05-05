// document.querySelectorAll(".btn")[0].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " has been Clicked"
// });

// document.querySelectorAll(".btn")[1].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " has been Clicked"
// });

// document.querySelectorAll(".btn")[2].addEventListener("click", function() {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " has been Clicked"
// });




var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " has been Clicked"
    });
}