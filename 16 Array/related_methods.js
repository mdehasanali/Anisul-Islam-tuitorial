// array mothors 
// you have already  learned about pop(),push(),concat()
//shift(), unshift(), slice(pos, noe, ele1, ele2..), splice()
// sort, reverse()

var names = ["Ehasan", "Rifat", "Salaullah", "Ashik", "Nur Islam", "Tuhin"];
console.log(names);

/*
// shift holo pop er ulta ... 1st theke remove korbe
names.shift();
console.log(names);
*/

/*
// shift holo push er ulta ... 1st theke add korbe
names.unshift("Rohim", "Nayem");
console.log(names);
*/

/*
// 0 thakle add hobe
names.splice(2, 0, "Rohim", "Hasan");
console.log(names);

// 1 dile akti element del hobe
names.splice(2, 1, "Rohim", "Hasan");
console.log(names);
*/

/*
// removing elements using splice.. delete hobe
names.splice(1, 2);
console.log(names);
*/

/*
// slice 1st theke element soria nibe
var newArray = names.slice(2);
console.log(newArray);
console.log(names);
*/

/*
// sort methor A theke Z projonto sajabe
var sortedName = names.sort();
console.log(sortedName);

// sort methor A theke Z projonto sajabe
var sortedName = names.sort();
names.reverse();
console.log(sortedName);
*/


// number sorting 1 - 100;
var numbers = [40, 20, 10, 50, 60, 30, 70, 90, 80];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

// number sorting 100 - 1;
var numbers = [40, 20, 10, 50, 60, 30, 70, 90, 80];
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);