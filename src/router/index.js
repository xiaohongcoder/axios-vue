import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2_2',
    name: '2_2',
    component: () => import('../views/2_2.vue')
  },
  {
    path: '/2_3',
    name: '2_3',
    component: () => import('../views/2_3.vue')
  },
  {
    path: '/2_3_put_patch',
    name: '2_3_put_patch',
    component: () => import('../views/2_3_put_patch.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
