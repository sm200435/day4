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
        component: () => import("../views/Users.vue")
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/Roles.vue")
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/Rights.vue")
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/Reports.vue")
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/Params.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/Orders.vue")
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/Goods.vue")
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/Categories.vue")
      },
      {
        path: "/wecome",
        name: "wecome",
        component: () => import("../views/Wecome.vue")
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
