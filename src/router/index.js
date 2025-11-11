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

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

export default router
