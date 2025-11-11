<template>
  <v-container class="mt-6">
    <h1>Mes agents favoris</h1>

    <v-row v-if="store.favorites.length > 0">
      <v-col
        v-for="agent in store.favorites"
        :key="agent.uuid"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <v-card class="ma-3 agent-card" height="400" @click="goToAgent(agent)">
          <v-img class="agent-bg" cover :src="agent.background" />
          <div class="agent-overlay">
            <v-img contain height="120" :src="agent.displayIcon" />
            <h3>{{ agent.displayName }}</h3>
            <p class="role">{{ agent.role?.displayName }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-alert v-else text type="info">
      Aucun favori pour le moment ❤️
    </v-alert>
  </v-container>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const favoriteAgents = computed(() =>
    store.agents.filter(a => store.favorites.includes(a.uuid)),
  )
  const store = useAppStore()
  const router = useRouter()

  function goToAgent (agent) {
    router.push({ name: 'AgentDetail', params: { uuid: agent.uuid } })
  }
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
