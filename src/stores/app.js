import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    agents: [],
    favorites: [], // <--- AJOUT
  }),

  actions: {
    async init () {
      if (this.agents.length > 0) {
        return
      }
      const res = await axios.get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      this.agents = res.data.data
    },

    toggleFavorite (agent) {
      const index = this.favorites.findIndex(a => a.uuid === agent.uuid)
      if (index === -1) {
        this.favorites.push(agent)
      } else {
        this.favorites.splice(index, 1)
      }
    },

    isFavorite (agent) {
      return this.favorites.some(a => a.uuid === agent.uuid)
    },
  },
})
