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
  {
    path: '/2_4_delete',
    name: '2_4_delete',
    component: () => import('../views/2_4_delete.vue')
  },
  {
    path: '/2_5',
    name: 'axios并发请求',
    component: () => import('../views/2_5.vue')
  },
  {
    path: '/3-1',
    name: '创建 axios 实例',
    component: () => import('../views/3-1.vue')
  },
  {
    path: '/3-2',
    name: '实例的相关配置',
    component: () => import('../views/3-2.vue')
  },
  {
    path: '/3-3',
    name: '常用参数配置 具体使用方法',
    component: () => import('../views/3-3.vue')
  },
  {
    path: '/3-4',
    name: '拦截器',
    component: () => import('../views/3-4.vue')
  },
  {
    path: '/3-5',
    name: '错误处理',
    component: () => import('../views/3-5.vue')
  },
  {
    path: '/3-6',
    name: '取消请求',
    component: () => import('../views/3-6.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
