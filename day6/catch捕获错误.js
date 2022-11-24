// const fs = require('fs')
// // 导入fs检测
// function get(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             reject(url)
//         })
//     })
// }

// get('./resource/木兰诗.md').then(res => {
//     console.log(res);
// }).catch((res) => {
//     console.log(res);
// }).then(() => {
//     get('./resource/出师表.md').then(res => {
//         console.log(res);
//     })
// }).catch((res) => {
//     console.log(res);
// }).then(() => {
//     get('./resource/望庐山瀑布.md').then(res => {
//         console.log(res);
//     })
// }).catch((res) => {
//     console.log(res);
// })
console.log('----------------------------------------------------------------------');
// const fs = require('fs')
// // 导入fs检测
// function get(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             reject(url)
//         })
//     })
// }

// get('./resource/木兰诗.md').then(res => {
//     console.log(res);
// }).catch((res) => {
//     console.log(res);
// }).then(() => {
//     get('./resource/出师表.md').then(res => {
//         console.log(res);
//     })
// }).catch((res) => {
//     console.log(res);
// }).then(() => {
//     get('./resource/望庐山瀑布.md').then(res => {
//         console.log(res);
//     })
// }).catch((res) => {
//     console.log(res);
// })
console.log('----------------------------------------------------------------------');
const fs = require('fs')
// 导入fs检测
function get(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            reject(url)
        })
    })
}

get('./resource/木兰诗.md').then(res => {
    console.log(res);
}).catch((res) => {
    console.log(res);
}).then(() => {
    get('./resource/出师表.md').then(res => {
        console.log(res);
    })
}).catch((res) => {
    console.log(res);
}).then(() => {
    get('./resource/望庐山瀑布.md').then(res => {
        console.log(res);
    })
}).catch((res) => {
    console.log(res);
})