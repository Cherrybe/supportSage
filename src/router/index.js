import { createRouter, createWebHistory } from 'vue-router'
import SageHome from '@/views/SageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SageHome
    }
  ]
})

export default router
