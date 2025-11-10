<template>
  <v-app>
    <!-- Barre de navigation -->
    <v-app-bar color="red darken-1" dark>
      <v-toolbar-title>Agents VALORANT</v-toolbar-title>
      <v-spacer />

      <!-- Liens vers les pages -->
      <v-btn text to="/">ACCUEIL</v-btn>
      <v-btn text to="/favoris">FAVORIS</v-btn>
    </v-app-bar>

    <!-- Contenu de la page -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
