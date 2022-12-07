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
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users.vue")
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/roles.vue")
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/rights.vue")
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/reports.vue")
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/params.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/orders.vue")
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods.vue")
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/categories.vue")
      },
      {
        path: "/wecome",
        name: "wecome",
        component: () => import("../views/wecome.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
