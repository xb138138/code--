import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/goods',
      component: () => import('@/views/Goods.vue')
    }
  ],
})

export default router
