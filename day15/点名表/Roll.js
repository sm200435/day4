var dataList = [
    {
        "id": 1,
        "name": "张世权",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "宋海宇",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "宋增杰",
        "sex": 0,
        "checked": false
    },
    {
        "id": 4,
        "name": "王龙翔",
        "sex": 0,
        "checked": false
    },
    {
        "id": 5,
        "name": "侯建荞",
        "sex": 1,
        "checked": false
    },
    {
        "id": 6,
        "name": "郝嫚嫚",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "付高聪",
        "sex": 0,
        "checked": false
    },
    {
        "id": 8,
        "name": "张建雨",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "孙旭瑶",
        "sex": 1,
        "checked": false
    },
    {
        "id": 10,
        "name": "张立",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "巴钦",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "吴倩",
        "sex": 1,
        "checked": false
    },
    {
        "id": 13,
        "name": "徐婉颖",
        "sex": 1,
        "checked": false
    },
    {
        "id": 14,
        "name": "刘艺",
        "sex": 1,
        "checked": false
    },
    {
        "id": 15,
        "name": "薛翔元",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "王伟臣",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "程怀博",
        "sex": 0,
        "checked": false
    }, {
        "id": 18,
        "name": "高亚鹏",
        "sex": 1,
        "checked": false
    }, {
        "id": 19,
        "name": "韩泽雨",
        "sex": 0,
        "checked": false
    }, {
        "id": 20,
        "name": "李宏恩",
        "sex": 0,
        "checked": false
    }, {
        "id": 21,
        "name": "江萌洋",
        "sex": 1,
        "checked": false
    }, {
        "id": 22,
        "name": "孙铭",
        "sex": 0,
        "checked": false
    }, {
        "id": 23,
        "name": "杨志豪",
        "sex": 0,
        "checked": false
    }, {
        "id": 24,
        "name": "张宗耀",
        "sex": 0,
        "checked": false
    }, {
        "id": 25,
        "name": "周璇",
        "sex": 1,
        "checked": false
    }, {
        "id": 26,
        "name": "代伊涵",
        "sex": 0,
        "checked": false
    },
    {
        "id": 27,
        "name": "章奥博",
        "sex": 0,
        "checked": false
    },
    {
        "id": 28,
        "name": "李妍",
        "sex": 1,
        "checked": false
    },
    {
        "id": 29,
        "name": "邓林柯",
        "sex": 0,
        "checked": false
    }, {
        "id": 30,
        "name": "章涵语",
        "sex": 0,
        "checked": false
    }, {
        "id": 29,
        "name": "郑峰",
        "sex": 0,
        "checked": false
    }
]; 
// 名单
let timeOut = document.getElementsByClassName('timeOut')[0]
// 时间
let part=document.getElementsByClassName('part')[0]
// 左下名单
student()
// 名单渲染
function time() {
    var dt = new Date()
    var Y = dt.getFullYear()//获取年
    var M = (String(dt.getMonth() + 1)).padStart(2,'0')//获取月，月份从零开始所以要加一
    // padStart()补全长度功能 第一个参数是判断字符串够不够,不够就把第二个参数补到字符串前面
    var D = (String(dt.getDate())).padStart(2,'0')//获取日
    var h = (String(dt.getHours())).padStart(2,'0')//获取时
    var m = (String(dt.getMinutes())).padStart(2,'0')//获取分
    var s = (String(dt.getSeconds())).padStart(2,'0')//获取秒
    timeOut.innerText=`时间：${Y}-${M}-${D}  ${h}:${m}:${s}`
}
setInterval(()=>{
    time()
},1000)

function student(){
    part.innerHTML=""
    dataList.forEach((item,index)=>{
        let li=document.createElement('li')
        li.innerHTML=`${item.name}`
        li.style.background=randomColor()
        // 给li设置颜色背景
        li.className='liClass'
        part.appendChild(li)
        // 在ul节点里末尾添加
    })
}
// 名单渲染

function randomNum(){
    return Math.floor(Math.random()*256)
    // Math.floor向下取整
    // Math.ceil向上取整
    // Math.round四舍五入
    // Math.random()随机数
}
// 随机数

function randomColor(){
    return `linear-gradient(to right,rgb(${randomNum()},${randomNum()},${randomNum()}),rgb(${randomNum()},${randomNum()},${randomNum()})`
    // to right 角度
}
// 随机颜色



