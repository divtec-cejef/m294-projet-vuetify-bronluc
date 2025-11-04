// Utilities
import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    isLoading: false,
    error: null,
    books: [],
    pokemons: [],
  }),

  getters: {
    hasBooks: state => state.books.length > 0,
    totalBooks: state => state.books.length,
  },

  actions: {
    async fetchBooks () {
      try {
        this.isLoading = true
        const response = await api.get('agents')
        this.books = response.data.data
        console.log('Livres chargés :', this.books)
      } catch (error) {
        this.error = 'Erreur lors du chargement des livres :' + error.message
        return error
      }
    },

    async init () {
      await this.fetchBooks()
    },
  },
})
