import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'login',
        component: () => import('../views/loginView.vue')
      },
      {
        path: '/:id',
        name: 'functionPage',
        component: () => import('../views/functionView.vue')
      }
    ]
})

export default router
