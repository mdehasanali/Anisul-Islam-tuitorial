// find (callback, value )return the value of the first element that pass certain candotion


var numbers = [11, 41, 20, 45, 48, ];
var firstNumbers = numbers.find(x => x % 2 === 0)
console.log(firstNumbers);


var numbers = [11, 41, 20, 45, 48, ];
var firstNumbers = numbers.find((x) => {
    if (x % 2 === 0) {
        return x
    }
})
console.log(firstNumbers);


var numbers = [11, 41, 20, 45, 48, ];
const myFunction = (value, index, array) => {
    if (value % 2 === 0) {
        return value;
    }
}
var firstNumbers = numbers.find(myFunction);
console.log(firstNumbers);








// findIndex(callback, value) return the index of the first element that pass certain candotion


var numbers = [11, 41, 20, 45, 48, ];
var firstNumbers = numbers.findIndex(x => x % 2 === 0)
console.log(firstNumbers);


var numbers = [11, 41, 20, 45, 48, ];
var firstNumbers = numbers.findIndex((x) => {
    if (x % 2 === 0) {
        return x
    }
})
console.log(firstNumbers);


var numbers = [11, 41, 20, 45, 48, ];
const myFunction2 = (value, index, array) => {
    if (value % 2 === 0) {
        return value;
    }
}
var firstNumbers = numbers.findIndex(myFunction2);
console.log(firstNumbers);





// array object

const students = [{
    id: 101,
    fullName: 'Md. Ehasan Ali',
    gpa: 2.81
}, {
    id: 102,
    fullName: 'Md. Ahad Ali',
    gpa: 3.11
}, {
    id: 103,
    fullName: 'Md. Sanaullah',
    gpa: 4.41
}, {
    id: 104,
    fullName: 'Md. Samin',
    gpa: 5
}];

var first = students.find(x => x.gpa < 3)
console.log(first);


var first = students.find(x => {
    if (x.gpa > 4) {
        return x
    }
})
console.log(first);


var first = students.findIndex(x => x.gpa > 4)
console.log(first);