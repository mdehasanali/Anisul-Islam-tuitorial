// for vs forEach

/*
// for er nomuna
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let x = 0; x < numbers.length; x++) {
    console.log(numbers[x]);
};
*/




/*
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numbers.forEach(myFunction);

function myFunction(x) {
    console.log(x);
}
*/




/*
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
numbers.forEach(function(x) {
    console.log(x);
});
*/





/*
// array forEach sqer er nomuna
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sqer = [];
numbers.forEach(function(x) {
    sqer.push(x * x);
});
console.log(sqer);
*/





let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(numbers);

numbers.forEach(function(x, index, arr) {
    arr[index] = x + 5;
});

console.log(numbers);