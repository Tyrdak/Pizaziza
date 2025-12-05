import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import Parole from './pages/parole.vue'
import Panier from './pages/panier.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/parole',
    component: Parole,
  },
  {
    path: '/panier',
    component: Panier,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

