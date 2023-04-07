import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/blogs.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/experience.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/analytics.vue')
    }
  ]
})

export default router
