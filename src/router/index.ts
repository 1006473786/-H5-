import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '../views/TabBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TabBar',
      component: () => import('../views/TabBar.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/mainMenu/About.vue')
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: () => import('../views/mainMenu/Chat.vue')
    },  {
      path: '/Home',
      name: 'Home',
      component: () => import('../views/mainMenu/Home.vue')
    },  {
      path: '/Mine',
      name: 'Mine',
      component: () => import('../views/mainMenu/Mine.vue')
    },
  ]
})

export default router
