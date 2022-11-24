// const fs=require('fs')
// // 导入fs检测
// function getmulan(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/木兰诗.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// function getchushi(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// function getpubu(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/望庐山瀑布.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// getmulan().then(res=>{
//     console.log(res);
// }).then(()=>{
//     getchushi().then(res=>{
//         console.log(res);
//     })
// }).then(()=>{
//     getpubu().then(res=>{
//         console.log(res);
//     })
// })
console.log('----------------------------------------------------------------------');

// const fs=require('fs')
// // 导入fs检测
// function getmulan(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/木兰诗.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// function getchushi(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/出师表.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// function getpubu(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile('./resource/望庐山瀑布.md',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// getmulan().then(res=>{
//     console.log(res);
// }).then(()=>{
//     getchushi().then(res=>{
//         console.log(res);
//     })
// }).then(()=>{
//     getpubu().then(res=>{
//         console.log(res);
//     })
// })
console.log('----------------------------------------------------------------------');
const fs=require('fs')
// 导入fs检测
function getmulan(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resource/木兰诗.md',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.toString())
            }
        })
    })
}

function getchushi(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resource/出师表.md',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.toString())
            }
        })
    })
}

function getpubu(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./resource/望庐山瀑布.md',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.toString())
            }
        })
    })
}

getmulan().then(res=>{
    console.log(res);
}).then(()=>{
    getchushi().then(res=>{
        console.log(res);
    })
}).then(()=>{
    getpubu().then(res=>{
        console.log(res);
    })
})