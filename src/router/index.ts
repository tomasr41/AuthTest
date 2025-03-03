import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import FirebaseView from '@/views/FirebaseView.vue'
import SocialView from '@/views/SocialView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/Auth',
   name: 'auth', 
  component: AuthView
  },
  {
    path: '/Firebase',
    name: 'firebase', 
   component: FirebaseView
   },
   
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
