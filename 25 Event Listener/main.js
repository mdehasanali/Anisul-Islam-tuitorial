// var btn = document.querySelector("button");
// btn.addEventListener("click", myFunction)

// function myFunction() {
//     alert("Hello Ehasan")
// }



// var btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     alert("Hello Ehasan")
// });






var heading = document.querySelector("h1");

heading.addEventListener("mouseover", function() {
    this.classList.add("h1")
});
heading.addEventListener("mouseout", function() {
    this.classList.remove("h1");
    this.style.transition = ("all 1s")
});