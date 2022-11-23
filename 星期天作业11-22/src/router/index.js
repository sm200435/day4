import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',redirect: '/index'},
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    children:[
      {
        path: '/manage',
        name: 'manage',
        component: () => import('../views/manage.vue'),
      },
      {
        path: '/userList',
        name: '/userList',
        component: () => import('../views//userList.vue'),
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/shopList.vue'),
      },
      {
        path: '/foodList',
        name: 'foodList',
        component: () => import('../views/foodList.vue'),
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/orderList.vue'),
      },
      {
        path: '/adminList',
        name: 'adminList',
        component: () => import('../views/adminList.vue'),
      },
      {
        path: '/addShop',
        name: 'addShop',
        component: () => import('../views/addShop.vue'),
      },
      {
        path: '/addGoods',
        name: 'addGoods',
        component: () => import('../views/addGoods.vue'),
      },
      {
        path: '/visitor',
        name: 'visitor',
        component: () => import('../views/visitor.vue'),
      },
      {
        path: '/vueEdit',
        name: 'vueEdit',
        component: () => import('../views/vueEdit.vue'),
      },
      {
        path: '/adminSet',
        name: 'adminSet',
        component: () => import('../views/adminSet.vue'),
      },
      {
        path: '/explain',
        name: 'explain',
        component: () => import('../views/explain.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
