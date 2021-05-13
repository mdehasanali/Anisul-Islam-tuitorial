// function meassage(message) {
//     console.log(`${message}`);
// };
// meassage("This is a test demo")



// function meassage(message = `defults`) {
//     console.log(`${message}`);
// };
// meassage()
// meassage("This is a test demo")




// rest parlament
function message(x, y, ...z) {
    console.log(x, y, ...z);
}
message(10, 211, 55, 21, 24)


// rest parlament
function message(x, y, ...z) {
    console.log(`x = ${x} y = ${y} z = ${z}`);
}
message(10, 211, 55, 21, 24)