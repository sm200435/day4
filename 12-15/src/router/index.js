import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/Index.vue"),
    children: [
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users/Users.vue")
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/roles/Roles.vue")
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/rights/Rights.vue")
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/Reports.vue")
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/params/Params.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/order/Orders.vue")
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/Goods.vue")
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/categories/Categories.vue")
      },
      {
        path: "/wecome",
        name: "wecome",
        component: () => import("../views/Wecome.vue")
      },
      {
        path: "/add",
        name: "add",
        component: () => import("../views/goods/Add.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
