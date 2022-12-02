import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:'/group'},
  {
    path: '/group',
    name: 'group',
    component: () => import('../views/Group.vue')
  },
  {
    path: '/b',
    name: 'b',
    component: () => import('../views/b.vue')
  },
  {
    path: '/c',
    name: 'c',
    component: () => import('../views/c.vue')
  },
  {
    path: '/e',
    name: 'e',
    component: () => import('../views/e.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
