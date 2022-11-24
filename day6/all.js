// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(11111)
//     }, 3000);
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(22222)
//     }, 1000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(333333)
//     }, 1000)
// })

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
console.log('----------------------------------------------------------------------');
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(11111)
//     }, 3000);
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(22222)
//     }, 1000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(333333)
//     }, 1000)
// })

// Promise.all([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
console.log('----------------------------------------------------------------------');
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11111)
    }, 3000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22222)
    }, 1000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(333333)
    }, 1000)
})

Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})