/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import axios from 'axios'

import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables

// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

// main.js

// Même exemple avec Axios (plus simple)

async function chargerLivres () {
  try {
    // Requête GET avec Axios
    const response = await axios.get('http://localhost:3000')
    // On affiche le résultat dans la console
    console.log('Livres chargés :', response.data)
  } catch (error) {
    // En cas d’erreur, on affiche le message d’erreur
    console.error('Erreur lors de la récupération des livres:', error)
  }
}
chargerLivres()
