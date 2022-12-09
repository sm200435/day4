let express = require("express") //引入express
// express是启动node服务的包
let Mock = require("mockjs") //引入mock
// 1.mockjs是mock数据的包
const loginData = require("./login.json")
// 拿到自定义的登录数据
const leftList = require("./menus.json")
// 拿到左侧列表数据
let app = express()
//实例化express

app.use("/login", function (req, res) {
  console.log(req, "req")
  // console.log(res, "req")
  res.send(
    Mock.mock({
      ...loginData
    })
  )
})

app.use("/menus", function (req, res) {
  res.send(
    Mock.mock({
      ...leftList
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
