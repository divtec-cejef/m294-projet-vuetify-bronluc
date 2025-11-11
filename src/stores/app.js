import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    agents: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  }),

  actions: {
    async init () {
      if (this.agents.length === 0) {
        const res = await fetch('https://valorant-api.com/v1/agents')
        const data = await res.json()
        this.agents = data.data.filter(a => a.isPlayableCharacter)
      }
    },

    toggleFavorite (agent) {
      const index = this.favorites.findIndex(a => a.uuid === agent.uuid)
      if (index === -1) {
        this.favorites.push(agent)
      } else {
        this.favorites.splice(index, 1)
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },

    isFavorite (agent) {
      return this.favorites.some(a => a.uuid === agent.uuid)
    },
  },
})
