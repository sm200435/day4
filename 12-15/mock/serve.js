let Mock = require("mockjs")
let express = require("express")
let app = express()
// 创建网站服务器
let login = require("./common/login.json")
// 登录数据
let menus = require("./common/menus.json")
// 左侧导航数据
let user = require("./users/users.json")
// 用户管理数据列表
let addUser = require("./users/addUsers.json")
// 添加用户管理返回的数据
let editUser = require("./users/editUsers.json")
// 编辑用户管理返回的数据
let deleteUser = require("./users/deleteUsers")
// 删除用户管理返回的数据
let typeUser = require("./users/typeUsers.json")
// 点击修改用户的状态
// let roleList = require("./users/roleList.json")
// 分配角色的列表
let role = require("./users/role.json")
// 确认分配角色

let roles = require("./roles/roles.json")
// 角色列表数据
let addRoles = require("./roles/addRoles.json")
// 添加角色列表
let deleteRoles = require("./roles/deleteRoles.json")
// 删除角色列表
let editRoles = require("./roles/editRoles.json")
// 编辑角色列表
let rightsRoles = require("./roles/rightsRoles.json")
// 确认更新权限
let treeRoles = require("./roles/treeRoles.json")
// 分配权限树形数据
let deleteRight = require("./roles/deleteRight.json")
// 点击删除指定的权限

let rightList = require("./rights/rights.json")
// 权限列表数据

let categories = require("./categories/categories.json")
// 商品分类数据
let addCategories = require("./categories/addCategories.json")
// 添加商品分类
let deleteCategories = require("./categories/deleteCategories.json")
// 删除商品分类
let editCategories = require("./categories/editCategories.json")
// 编辑商品分类

let attributes = require("./params/attributes.json")
// 静态参数动态参数列表
let addAttributes = require("./params/addAttributes.json")
// 添加静态参数或动态参数属性
let deleteAttributes = require("./params/deleteAttributes.json")
// 编辑提交参数
let editAttributes = require("./params/editAttributes.json")
// 删除参数

let goods = require("./goods/goods.json")
// 商品列表数据
let addGoods = require("./goods/addGoods.json")
// 添加商品
let deleteGoods = require("./goods/deleteGoods.json")
// 删除商品
let editGoods = require("./goods/editGoods.json")
// 编辑商品

let orders = require("./orders/orders.json")
//订单数据列表
let kdOrders = require("./orders/kdOrder.json")
//订单数据快递位置

let reports = require("./reports/reports.json")
// 基于时间统计的折线图

app.use("/login", function (req, res) {
  // use中间件可以接收get和post请求req是前端发送来的数据，res是后端返回给前端的
  res.send(
    Mock.mock({
      ...login
    })
  )
})
// 登录

app.use("/menus", function (req, res) {
  res.send(
    Mock.mock({
      ...menus
    })
  )
})
// 左侧导航

app.get("/users", function (req, res) {
  res.send(
    Mock.mock({
      ...user
    })
  )
})
// 用户列表

app.post("/users", function (req, res) {
  res.send(
    Mock.mock({
      ...addUser
    })
  )
})
// 添加用户列表

app.put("/users/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...editUser
    })
  )
})
// 编辑用户列表

app.delete("/users/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteUser
    })
  )
})
// 删除用户列表

app.put("/users/:uid/state/:type", function (req, res) {
  res.send(
    Mock.mock({
      ...typeUser
    })
  )
})
// 修改用户状态

// app.get("/roles", function (req, res) {
//   res.send(
//     Mock.mock({
//       ...roleList
//     })
//   )
// })
// 获取分配角色列表

app.put("/users/:id/role", function (req, res) {
  res.send(
    Mock.mock({
      ...role
    })
  )
})
// 确认分配角色

app.get("/roles", function (req, res) {
  res.send(
    Mock.mock({
      ...roles
    })
  )
})
// 角色列表数据

app.post("/roles", function (req, res) {
  res.send(
    Mock.mock({
      ...addRoles
    })
  )
})
// 添加角色列表

app.delete("/roles/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteRoles
    })
  )
})
// 删除角色列表

app.put("/roles/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...editRoles
    })
  )
})
// 编辑提交角色

app.get("/rights/tree", function (req, res) {
  res.send(
    Mock.mock({
      ...treeRoles
    })
  )
})
// 所以权限数据

app.post("/roles/:roleid/rights", function (req, res) {
  res.send(
    Mock.mock({
      ...rightsRoles
    })
  )
})
// 确认更新权限

app.delete("/roles/:roleld/rights/:rightid", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteRight
    })
  )
})
// 点击删除权限

app.get("/rights/list", function (req, res) {
  res.send(
    Mock.mock({
      ...rightList
    })
  )
})
// 权限列表

app.get("/categories", function (req, res) {
  res.send(
    Mock.mock({
      ...categories
    })
  )
})
// 商品分类数据

app.post("/categories", function (req, res) {
  res.send(
    Mock.mock({
      ...addCategories
    })
  )
})
// 添加商品分类

app.put("/categories/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...editCategories
    })
  )
})
// 编辑商品分类

app.delete("/categories/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteCategories
    })
  )
})
// 删除商品分类

app.get("/categories/:id/attributes", function (req, res) {
  res.send(
    Mock.mock({
      ...attributes
    })
  )
})
// 静态参数或动态参数列表

app.post("/categories/:id/attributes", function (req, res) {
  res.send(
    Mock.mock({
      ...addAttributes
    })
  )
})
// 添加静态参数或动态参数属性

app.put("/categories/:id/attributes/:attrid", function (req, res) {
  res.send(
    Mock.mock({
      ...editAttributes
    })
  )
})
// 编辑提交参数

app.delete("/categories/:id/attributes/:attrid", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteAttributes
    })
  )
})
// 删除参数

app.get("/goods", function (req, res) {
  res.send(
    Mock.mock({
      ...goods
    })
  )
})
// 商品列表数据

app.post("/goods", function (req, res) {
  res.send(
    Mock.mock({
      ...addGoods
    })
  )
})
// 添加商品

app.delete("/goods/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...deleteGoods
    })
  )
})
// 删除商品

app.put("/goods/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...editGoods
    })
  )
})
// 编辑商品

app.get("/orders", function (req, res) {
  res.send(
    Mock.mock({
      ...orders
    })
  )
})
//订单数据列表

app.get("/kuaidi/:id", function (req, res) {
  res.send(
    Mock.mock({
      ...kdOrders
    })
  )
})
//订单数据列表快递位置

app.get("/reports/type/1", function (req, res) {
  res.send(
    Mock.mock({
      ...reports
    })
  )
})
// 折线图数据

app.listen("8848", () => {
  // 通过网站服务器下面的listen去监听8848端口
  console.log("监听接口8848")
})
