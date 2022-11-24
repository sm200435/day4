// const fs = require('fs')

// function get(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// get('./resource/出师表.md').then(res => {
//     // console.log(res);
//     return res
// }).then(data => {
//     get('./resource/木兰诗.md').then(res => {
//         // console.log(res);
//         // console.log(data);
//         return res + data
//     }).then(data1 => {
//         get('./resource/望庐山瀑布.md').then(res => {
//             console.log(res);
//             console.log(data1 + res);
//         })
//     })
// })

console.log('----------------------------------------------------------------------');
// const fs = require('fs')

// function get(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data.toString())
//             }
//         })
//     })
// }

// get('./resource/出师表.md').then(res => {
//     // console.log(res);
//     return res
// }).then(data => {
//     get('./resource/木兰诗.md').then(res => {
//         // console.log(res);
//         // console.log(data);
//         return res + data
//     }).then(data1 => {
//         get('./resource/望庐山瀑布.md').then(res => {
//             console.log(res);
//             console.log(data1 + res);
//         })
//     })
// })
console.log('----------------------------------------------------------------------');
const fs = require('fs')

function get(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data.toString())
            }
        })
    })
}

get('./resource/出师表.md').then(res => {
    // console.log(res);
    return res
}).then(data => {
    get('./resource/木兰诗.md').then(res => {
        // console.log(res);
        // console.log(data);
        return res + data
    }).then(data1 => {
        get('./resource/望庐山瀑布.md').then(res => {
            console.log(res);
            console.log(data1 + res);
        })
    })
})