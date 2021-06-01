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
        // resolve('Task five is completed')
        reject('Task five is not completed')
    })
}

async function allPromice() {
    try {
        console.log(await (taskOne()));
        console.log(await (taskTwo()));
        console.log(await (taskthree()));
        console.log(await (taskFour()));
        console.log(await (taskFive()));
    } catch (error) {
        console.log(error);
    }
}
allPromice()
console.log(`bye`);