import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{path:'/',redirect:'/internet'},
  {
    path: "/visualize",
    name: "visualize",
    component: () =>
      import("../views/Visualize.vue")
  },
  {
    path: "/gaud",
    name: "gaud",
    component: () =>
      import("../views/Gaud.vue")
  },
  {
    path: "/internet",
    name: "internet",
    component: () =>
      import("../views/Internet.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
