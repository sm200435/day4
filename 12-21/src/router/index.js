import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{path:'/',redirect:'/visualize'},
  {
    path: "/visualize",
    name: "visualize",
    component: () =>
      import("../views/Visualize.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
