<template>
  <v-container class="mt-6">
    <!-- Barre de recherche et filtre -->
    <v-row align="center" class="mb-4" justify="space-between">
      <v-text-field
        v-model="searchQuery"
        append-icon="mdi-magnify"
        hide-details
        label="Rechercher un agent"
      />
      <v-select
        v-model="selectedRole"
        hide-details
        :items="roles"
        label="Filtrer par rôle"
      />
      <v-btn
        icon
        title="Réinitialiser le filtre"
        @click="selectedRole = null; searchQuery = ''"
      >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-row>

    <!-- Liste des agents -->
    <v-row>
      <v-col
        v-for="agent in filteredAgents"
        :key="agent.uuid"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <v-card
          class="ma-3 agent-card"
          dynamique
          height="400"
          navigation
          :to="`/agents/${agent.uuid}`"
        >
          >
          <v-img class="agent-bg" cover :src="agent.background" />

          <div class="agent-overlay">
            <v-img contain height="120" :src="agent.displayIcon" />
            <h3>{{ agent.displayName }}</h3>
            <p class="role">{{ agent.role?.displayName }}</p>

            <!-- Bouton favori -->
            <v-btn
              class="favorite-btn"
              :color="store.isFavorite(agent) ? 'red' : 'grey'"
              icon
              @click.stop.prevent="store.toggleFavorite(agent)"
            >
              <v-icon>{{ store.isFavorite(agent) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
            </v-btn>
          </div>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/stores/app'
  const router = useRouter()

  function goToAgent (agent) {
    router.push({ name: 'AgentDetail', params: { uuid: agent.uuid } })
  }

  const store = useAppStore()
  const showDialog = ref(false)
  const selectedAgent = ref(null)
  const searchQuery = ref('')
  const selectedRole = ref(null)

  onMounted(() => {
    if (store.agents.length === 0) {
      store.init()
    }
  })

  function openAgent (agent) {
    selectedAgent.value = agent
    showDialog.value = true
  }

  const roles = computed(() => {
    const uniqueRoles = store.agents
      .map(a => a.role?.displayName)
      .filter(Boolean)
    return [...new Set(uniqueRoles)]
  })

  const filteredAgents = computed(() => {
    return store.agents.filter(agent => {
      const matchName = agent.displayName
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
      const matchRole = selectedRole.value
        ? agent.role?.displayName === selectedRole.value
        : true
      return matchName && matchRole
    })
  })
</script>

<style scoped>
.agent-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.3s ease;
}
.agent-card:hover {
  transform: scale(1.03);
}
.agent-bg {
  filter: brightness(0.5);
  height: 100%;
}
.agent-overlay {
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 200px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
.role {
  font-size: 0.9rem;
  color: #ccc;
}
.ability-name {
  font-weight: bold;
  margin-top: 5px;
}

 .favorite-btn {
   position: absolute;
   top: 10px;
   right: 10px;
   background-color: rgba(0, 0, 0, 0.5);
 }

.favorite-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
