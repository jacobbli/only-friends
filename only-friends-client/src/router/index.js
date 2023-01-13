import { createRouter, createWebHistory } from 'vue-router'
import Forum from '../views/Forum.vue'
import Prompt from '../views/Prompt.vue'

const routes = [
  {
    path: '/',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/prompt/:id',
    name: 'Prompt',
    component: Prompt
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
