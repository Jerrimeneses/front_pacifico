import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import LoginView from '../components/auth/LoginView.vue'


const routes = [
  
  {
    path: '/',
    name: 'login',
    component:LoginView
  
  },
  {
    path: '/dash',
    name: 'dash',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
