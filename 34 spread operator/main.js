// function add(a, b, c) {
//     return a + b + c;
// }
// let numbers = [10, 20, 30]
// console.log(add(numbers[0], numbers[1], numbers[2]));


// function add(a, b, c) {
//     return a + b + c;
// }
// let numbers = [10, 20, 30]
// console.log(add(...numbers));







// spreed operator j kono jaigai use kora jabe

// function add(a, b, c) {
//     return a + b + c;
// }
// let numbers1 = [10, 20, 30]
// let numbers2 = [...numbers1, 40, 50]
// console.log(numbers2);

// let numbers1 = [10, 20, 30]
// let numbers2 = [40, 50, ...numbers1]
// console.log(numbers2);






// concat array 

// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// let number = numbers1.concat(numbers2);
// console.log(number);

// let numbers1 = [10, 20, 30];
// let numbers2 = [40, 50, 60];
// let number = [...numbers1, ...numbers2];
// console.log(number);





// concat object 

let numbers1 = {
    name: "Md: Ehasan Ali",
    roll: 416875,
    registision: 1502045702,
    occupation: "Student"
}
let numbers2 = {
    phone: 175128520,
    father_name: "Abdus Salam",
};

let number = {...numbers1, ...numbers2 };
console.log(number);