import { createRouter, createWebHistory } from 'vue-router'
import AgentDetail from '@/pages/agents/[uuid]/index.vue'
import Favoris from '@/pages/favoris.vue'
import Home from '@/pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: Favoris,
  },
  {
    path: '/agents/:uuid',
    name: 'AgentDetail',
    component: AgentDetail,
  },
  // 🔥 Route de secours pour éviter les erreurs 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: {
      template: `
        <v-container class="text-center mt-10">
          <h1 class="text-h4 text-error mb-4">Erreur 404</h1>
          <p>La page demandée n'existe pas ou une erreur est survenue.</p>
          <v-btn color="primary" class="mt-4" @click="$router.push('/')">
            Retour à l’accueil
          </v-btn>
        </v-container>
      `,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🧩 Gestion automatique des erreurs de modules dynamiques (Vite)
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
      localStorage.removeItem('vuetify:dynamic-reload')
    } else {
      console.warn('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error('Erreur détectée dans le routeur :', err)
  }
})

export default router
