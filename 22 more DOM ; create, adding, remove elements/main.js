//element find kora
// var tagName1 = document.getElementsByTagName("h1")[0];
// var tagName2 = document.getElementsByTagName("h1")[1];
// tagName1.innerHTML = "Says Hello Every One";



// creating html element pore
var heading3 = document.createElement("h3"); // html element create
var text = document.createTextNode("this is a heading 3"); // create element write with html
heading3.appendChild(text); // tag jog kora

var myDiv = document.getElementsByClassName("myDiv")[0]; // find kora
myDiv.appendChild(heading3); // find element kora



var myDiv = document.getElementsByClassName("myDiv")[0]; // find kora
var heading2 = document.getElementsByTagName("h1")[1]; // select kora
myDiv.removeChild(heading2); // remove child kora


// creating html element age 
var heading0 = document.createElement("h2"); // html element create
var text0 = document.createTextNode("this is a heading 2 bt h1 after"); // create element write with html
heading0.appendChild(text0); // tag jog kora
var myDiv = document.getElementsByClassName("myDiv")[0]; // find kora
var headingtag = document.getElementsByTagName("h1")[0]; // tag find kora 
myDiv.insertBefore(heading0, headingtag); // inserBefore add kora