// const p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(111111)
//     },300)
// })
// const p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(22222)
//     },3000)
// })
// const p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(33333)
//     },500)
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
console.log('----------------------------------------------------------------------');

// const p1=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(111111)
//     },300)
// })
// const p2=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(22222)
//     },3000)
// })
// const p3=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(33333)
//     },500)
// })

// Promise.race([p1,p2,p3]).then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })
console.log('----------------------------------------------------------------------');
const p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(111111)
    },300)
})
const p2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(22222)
    },3000)
})
const p3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(33333)
    },500)
})

Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})