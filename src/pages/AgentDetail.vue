<template>
  <v-container v-if="agent">
    <v-row>
      <v-col cols="12" md="6">
        <v-img
          class="rounded-xl"
          contain
          height="400"
          :src="agent.fullPortrait"
        />
      </v-col>

      <v-col cols="12" md="6">
        <h1>{{ agent.displayName }}</h1>
        <h3 class="text-subtitle-1 text-grey">{{ agent.role?.displayName }}</h3>
        <p class="mt-4">{{ agent.description }}</p>

        <h4 class="mt-6 mb-2">Compétences</h4>
        <v-row>
          <v-col
            v-for="ability in agent.abilities"
            :key="ability.slot"
            cols="12"
            sm="6"
          >
            <v-card class="pa-3 text-center" outlined>
              <v-img
                class="mb-2"
                contain
                height="60"
                :src="ability.displayIcon"
              />
              <strong>{{ ability.displayName }}</strong>
              <p>{{ ability.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-btn
      class="mt-6"
      color="primary"
      @click="$router.push('/')"
    >
      ← Retour à la liste
    </v-btn>
  </v-container>

  <v-container v-else>
    <v-progress-circular color="primary" indeterminate />
  </v-container>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const store = useAppStore()

  const agent = computed(() => {
    return store.agents.find(a => a.uuid === route.params.uuid)
  })
</script>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
