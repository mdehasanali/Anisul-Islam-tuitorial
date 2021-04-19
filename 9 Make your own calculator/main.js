/*
var number1 = 50;
var number2 = 20;

var result = number1 + number2;
document.write("sum = " + result + "<br/ >"); // (+) create kor

var result = number1 - number2;
document.write("sub = " + result + "<br/ >"); // (-) create kor

var result = number1 * number2;
document.write("sub = " + result + "<br/ >"); // (*) create kor
*/





// ইউজার জেতা টাইপ করবে সেটা string আকারে আসবে ।
// এই জন্য string কে parseInt এ রুপান্তরিত করা । তাহলে string টি Number এ পরিনত হবে ।




var number1 = prompt("Enter First Number : ");
var number2 = prompt("Enter Second Number : ");

var number1 = parseInt(number1, 10);
var number2 = parseInt(number2, 10);

var sum = number1 + number2;
document.write(number1 + " + " + number2 + " = " + sum + "<br/>"); // jog ko ra

var sub = number1 - number2;
document.write(number1 + " - " + number2 + " = " + sub + "<br/>"); // beyog ko ra

var mul = number1 * number2;
document.write(number1 + " * " + number2 + " = " + mul + "<br/>"); // gun ko ra

var div = number1 / number2;
document.write(number1 + " / " + number2 + " = " + div + "<br/>"); // vag ko ra

var rem = number1 % number2;
document.write(number1 + " % " + number2 + " = " + rem + "<br/>"); // vag_fol ko ra