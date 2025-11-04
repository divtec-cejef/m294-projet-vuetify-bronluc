<template>
  <v-app>
    <!-- App Bar avec recherche et filtre -->
    <v-app-bar app color="red" dark>
      <v-toolbar-title>Agents VALORANT</v-toolbar-title>

      <v-spacer />

      <!-- Recherche par nom -->
      <v-text-field
        v-model="searchQuery"
        append-icon="mdi-magnify"
        dense
        flat
        hide-details
        label="Rechercher un agent"
        solo-inverted
      />
      <v-btn
        icon
        title="Réinitialiser le filtre"
        @click="selectedRole = null"
      >
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
      <!-- Filtre par rôle -->
      <v-select
        v-model="selectedRole"
        dense
        flat
        hide-details
        :items="roles"
        label="Filtrer par rôle"
        solo-inverted
      />
    </v-app-bar>

    <v-container class="mt-12">
      <v-row>
        <!-- Liste des agents filtrés -->
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
            height="400"
            @click="openAgent(agent)"
          >
            <v-img
              class="agent-bg"
              cover
              :src="agent.background"
            />
            <div class="agent-overlay">
              <v-img
                contain
                height="120"
                :src="agent.displayIcon"
              />
              <h3>{{ agent.displayName }}</h3>
              <p class="role">{{ agent.role?.displayName }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Dialogue des détails -->
      <v-dialog v-model="showDialog" max-width="800">
        <v-card v-if="selectedAgent">
          <v-card-title class="headline">{{ selectedAgent.displayName }}</v-card-title>
          <v-card-subtitle>{{ selectedAgent.role?.displayName }}</v-card-subtitle>

          <v-card-text>
            <v-img
              class="mb-4"
              contain
              height="300"
              :src="selectedAgent.fullPortrait"
            />
            <p>{{ selectedAgent.description }}</p>

            <h4 class="mt-4">Abilities</h4>
            <v-row>
              <v-col
                v-for="ability in selectedAgent.abilities"
                :key="ability.slot"
                cols="12"
                md="3"
                sm="6"
              >
                <v-card class="pa-2 text-center" flat>
                  <v-img
                    contain
                    height="60"
                    :src="ability.displayIcon"
                  />
                  <p class="ability-name">{{ ability.displayName }}</p>
                  <small>{{ ability.description }}</small>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" @click="showDialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useAppStore } from '@/stores/app'

  const store = useAppStore()
  const showDialog = ref(false)
  const selectedAgent = ref(null)

  // Recherche et filtre
  const searchQuery = ref('')
  const selectedRole = ref(null)

  // Initialisation store
  onMounted(() => {
    store.init()
  })

  // Ouvrir la fiche d’un agent
  function openAgent (agent) {
    selectedAgent.value = agent
    showDialog.value = true
  }

  // Liste des rôles disponibles pour filtrer
  const roles = computed(() => {
    const uniqueRoles = store.books
      .map(a => a.role?.displayName)
      .filter(Boolean)
    return [...new Set(uniqueRoles)]
  })

  // Agents filtrés dynamiquement
  const filteredAgents = computed(() => {
    return store.books.filter(agent => {
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
</style>
