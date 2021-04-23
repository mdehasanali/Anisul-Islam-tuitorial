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


/*
// vowel and consonant
var letters = prompt("Enter First Letter : ");
var letters = letters.toUpperCase();
if (letters == "A" || letters == "E" || letters == "I" || letters == "O" || letters == "U") {
    document.write("Vowel");
} else {
    document.write("Consonant");
}
*/




/*
// digit spelling
// 0 - Zero , 1 - one ..... 9 -nine, ten - not a valid digit
var digit = prompt("Enter One Digit Number :- ");
if (digit == 0) {
    document.write("Zero");
} else if (digit == 1) {
    document.write("One");
} else if (digit == 2) {
    document.write("Two");
} else if (digit == 3) {
    document.write("Three");
} else if (digit == 4) {
    document.write("Four");
} else if (digit == 5) {
    document.write("Five");
} else if (digit == 6) {
    document.write("Six");
} else if (digit == 7) {
    document.write("Seven");
} else if (digit == 8) {
    document.write("Eight");
} else if (digit == 9) {
    document.write("Nine");
} else {
    document.write("Not a valid digit");
}
*/



/*
// digit spelling with switch programing 
// 0 - Zero , 1 - one ..... 9 -nine, ten - not a valid digit
var digit = prompt("Enter One Digit Number :- ");
switch (digit) {
    case "0":
        document.write("Zero");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Four");
        break;
    case "5":
        document.write("Five");
        break;
    case "6":
        document.write("Six");
        break;
    case "7":
        document.write("Seven");
        break;
    case "8":
        document.write("Eight");
        break;
    case "9":
        document.write("Nine");
        break;

    default:
        document.write("Not a valid digit");
}
*/