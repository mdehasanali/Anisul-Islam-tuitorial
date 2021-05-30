// synchronous programing 
// একটি Demo সম্পূর্ণ  করে আরেকটি তে যাবে

// javaScript k blocking behebiyar bola hoi

// console.log("Demo1");
// console.log("Demo2");
// console.log("Demo3");
// console.log("Demo4");
// console.log("Demo5");




// let d1 = () => {
//     console.log("Demo1");
// };

// let d2 = () => {
//     console.log("Demo2 loading page 2 secend...");
// };

// let d3 = () => {
//     console.log("Demo3");
// };

// let d4 = () => {
//     console.log("Demo4");
// };

// let d5 = () => {
//     console.log("Demo5");
// };

// d4();
// d2();
// d5();
// d1();
// d3();





let d1 = () => {
    console.log("Demo1");
};

let d2 = () => {
    setTimeout(() => {
        console.log("Demo2 loading page 2 secend...")
    }, 2000)
};

// let d2 = () => {
//     setTimeout(TimeOut, 2000)
// };

// let TimeOut = () => {
//     console.log("Demo2 loading page 2 secend...");
// }

let d3 = () => {
    console.log("Demo3");
};

let d4 = () => {
    console.log("Demo4");
};

let d5 = () => {
    console.log("Demo5");
};

d4();
d2();
d5();
d1();
d3();