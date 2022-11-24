// function p(){
//     return new Promise((resolve,reject)=>{
//         reject();
//     })
// }
// p().then(()=>{
//     console.log('成功');
// }).catch(() => {
//     console.log('我是第三组孙銘');
// }).finally(() => {
//     console.log('哪里都有我');
// })
console.log('----------------------------------------------------------------------');

// function p(){
//     return new Promise((resolve,reject)=>{
//         reject();
//     })
// }
// p().then(()=>{
//     console.log('成功');
// }).catch(() => {
//     console.log('我是第三组孙銘');
// }).finally(() => {
//     console.log('哪里都有我');
// })
console.log('----------------------------------------------------------------------');

function p(){
    return new Promise((resolve,reject)=>{
        reject();
    })
}
p().then(()=>{
    console.log('成功');
}).catch(() => {
    console.log('我是第三组孙銘');
}).finally(() => {
    console.log('哪里都有我');
})