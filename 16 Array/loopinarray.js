/*
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[4]);
console.log(num[5]);
console.log(num[6]);
console.log(num[7]);
console.log(num[8]);
console.log(num[9]);
*/



/*
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}
*/



/*
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = 0;
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    sum = sum + num[i]
}
console.log(sum);
*/




var num = new Array;
for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt("Enter Your Number :- "))
}
var sum = 0;
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    sum = sum + num[i]
}
console.log("Sum " + sum);