import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: () => import("../views/Products.vue")
  },
  {
    path: '/form/command',
    name: 'FormCommand',
    component: () => import("../views/FormCommand.vue")
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import("../views/ProductDescription.vue")
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
