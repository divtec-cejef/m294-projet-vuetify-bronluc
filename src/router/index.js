import { createRouter, createWebHistory } from 'vue-router'
import AgentDetail from '@/pages/AgentDetail.vue'
import Favoris from '@/pages/Favoris.vue'
import Index from '@/pages/Index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Index },
    { path: '/agent/:uuid', name: 'AgentDetail', component: AgentDetail },
    { path: '/favoris', name: 'Favoris', component: Favoris },
  ],
})
