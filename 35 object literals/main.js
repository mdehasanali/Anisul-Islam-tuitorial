// object literals

function studentInfo(name, age) {
    return {
        // shoted kore likha jai
        name, // name : name,
        age, // age : age
    }
}
console.log(studentInfo("Md: Ehasan Ali ", 18));







// let message = {
//     // body : propaty ===== shortcut function
//     body() {
//         return `Hey! mera mera nam Ehasan ali`
//     }
// }
// console.log(message.body());


// let message = {
//     // body : propaty ===== shortcut function
//     'body name': function() {
//         return `Hey! mera mera nam Ehasan ali`
//     }
// }
// console.log(message['body name']());


let message = {
    // body : propaty ===== shortcut function
    'body name' () {
        return `Hey! mera mera nam Ehasan ali`
    }
}
console.log(message['body name']());