/*
// if, else used
var num = 5;
if (num % 2 == 0) {
    document.write("Even");
} else {
    document.write("Odd");
*/


/*
// if, elseif, else used by script
var num = prompt("Enter Your Number : ");
if (num > 0) {
    document.write("Positive");
} else if (num < 0) {
    document.write("Negative");
} else {
    document.write("Zero");
}
*/


/*
// Letter grade Program
var marks = prompt("Enter Your Marks Number : ");
if (marks >= 80) {
    document.write("A+");
} else if (marks >= 70) {
    document.write("A");
} else if (marks >= 60) {
    document.write("A-");
} else if (marks >= 50) {
    document.write("B");
} else if (marks >= 40) {
    document.write("C");
} else if (marks >= 33) {
    document.write("D");
} else {
    document.write("Fail")
}
*/


/*
// Letter grade Programs using logical operators
var marks = prompt("Enter Your Marks Number : ");
if (marks > 100 || marks < 0) {
    document.write("Invalid marks");
} else if (marks >= 80 && marks <= 100) {
    document.write("A+");
} else if (marks >= 70 && marks <= 79) {
    document.write("A");
} else if (marks >= 60 && marks <= 69) {
    document.write("A-");
} else if (marks >= 50 && marks <= 59) {
    document.write("B");
} else if (marks >= 40 && marks <= 49) {
    document.write("C");
} else if (marks >= 33 && marks <= 39) {
    document.write("D");
} else {
    document.write("Fail")
}
*/



/*
// large Number
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var num3 = prompt("Enter three Number");

if (num1 > num2 && num1 > num3) {
    document.write("Large Number " + num1);
} else if (num2 > num3 && num2 > num1) {
    document.write("Large Number " + num2);
} else {
    document.write("Large Number " + num3);
}
*/



// vowel and consonant
var letters = prompt("Enter First Letter : ");
var letters = letters.toUpperCase();
if (letters == "A" || letters == "E" || letters == "I" || letters == "O" || letters == "U") {
    document.write("Vowel");
} else {
    document.write("Consonant");
}