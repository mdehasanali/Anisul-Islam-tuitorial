// const square = (x) => {
//     console.log(`square of ${x} : to ${x*x}`);
// }
// square(5);
// square(10);

// // const y = square;
// // y(40);


// const highterOrderFunction = (num, callback) => {
//     callback(num)
// }

// highterOrderFunction(6, square)




let d1 = (callback) => {
    console.log("Demo1");
    callback();
};

let d2 = (callback) => {
    setTimeout(() => {
        console.log("Demo2 loading page 2 secend...");
        callback();
    }, 2000)

};

let d3 = (callback) => {
    console.log("Demo3");
    callback();
};

let d4 = (callback) => {
    console.log("Demo4");
    callback();
};

let d5 = () => {
    console.log("Demo5");
};


d1(function f1() {
    d2(function f2() {
        d3(function f3() {
            d4(function f4() {
                d5();
            });
        });
    });
});


d1(() => {
    d2(() => {
        d3(() => {
            d4(() => {
                d5();
            });
        });
    });
});



console.log('Hey !');
document.querySelector("button").addEventListener('click', () => {
    console.log('add listerner ');
})
console.log('bye !');