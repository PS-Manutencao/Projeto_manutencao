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
      },
      {
        path: '/gerenciamento',
        name: 'gerenciamento',
        component: () => import('../views/gerenciamemtoView.vue')
      }
    ]
})

export default router
