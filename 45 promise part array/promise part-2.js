// resolve thake countinue hobe r reject hole theme jabe

console.log("welcame");

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('Task one is completed')
        reject('Task one is not completed')
    })
}

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task two is completed')
                // reject('Task two is not completed')
        }, 2000)
    })
}

const taskthree = () => {
    return new Promise((resolve, reject) => {
        resolve('Task three is completed')
            // reject('Task three is not completed')
    })
}

const taskFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task four is completed')
                // reject('Task four is not completed')
        }, 2000)
    })
}

const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve('Task five is completed')
            // reject('Task five is not completed')
    })
}


// synctonas function 

// taskOne().then(res => {
//     console.log(res)
// })
// taskTwo().then(res => {
//     console.log(res)
// })
// taskthree().then(res => {
//     console.log(res)
// })
// taskFour().then(res => {
//     console.log(res)
// })
// taskFive().then(res => {
//     console.log(res)
// }).catch(res => {
//     console.log(res)
// })





// asynctonas function 

taskOne().then(res => {
        console.log(res)
    })
    .then(taskTwo)
    .then(res => {
        console.log(res)
    })
    .then(taskthree)
    .then(res => {
        console.log(res)
    })
    .then(taskFour)
    .then(res => {
        console.log(res)
    })
    .then(taskFive)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })


console.log(`bye`);