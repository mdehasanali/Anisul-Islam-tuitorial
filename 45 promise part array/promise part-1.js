// console.log('Welcome');

// // How to create a promise - pendding, resolve, reject
// const promise1 = new Promise((resolve, reject) => {

//     let completedPromise = true;
//     if (completedPromise) {
//         resolve('Your Are complete promise 1');
//     } else {
//         reject('Your are fail promise 1');
//         // reject(new Error('Your are fail promise 1'));
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve("complate promise 2");
//     // reject("not Complete")
// })


// console.log(promise1);


// resolve hole than function a jabe 
// reject hole catch function a jabe

// Promise print 
// promise1.then((res) => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//         console.log(err.message);
//     })

// promise2.then(res => {
//         console.log(res);
//     })
//     // .catch(err => {
//     //     console.log(err);
//     // })


// promise jodi onek gulo thake tahole akbar a print kora jabe
// Promise.all([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// console.log('End');


// disturcture 
// Promise.all([promise1, promise2])
//     .then(([res1, res2]) => {
//         console.log(res1);
//         console.log(res2);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// console.log('End');






// promise function mothor race

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('complated promise1')
    }, 5000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("complate promise 2");
    }, 3000)
})

Promise.race([promise1, promise2])
    .then(res => {
        console.log(res);
    })