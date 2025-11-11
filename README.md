[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EBdR9AYf)
# 🌐 Mon Projet Vue.js & Vuetify

## 1. 🎨 Présentation du projet

### Concept
- J'ai chosi l'API de valorant parce que j'ai déjà joué au jeu et qu'elle est complète
- Afficher les agents du jeu avec quelques fonctionnalités

### Fonctionnalités principales
- Affichage des agents (via API)
- Recherche / Tri / Filtres / Favoris
- Fonctionnalité interactive (favoris, détails agents)

### Aperçu visuel
![img.png](img.png)


## 2. 📚 Parcours d'apprentissage

### Ressources utilisées
#### Documentation & tutos
- [Vue 3 Docs](https://vuejs.org/guide/introduction.html)
- [Vuetify Docs](https://vuetifyjs.com/en/components/all/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- [Chat gpt](https://chatgpt.com)

#### Progression
- Semaine 1 : Recherche d'une bonne API + test
- Semaine 2 : Création du projet, ajout des composants
- Semaine 3 : ajout du tri / filtres + détails des agents
- Semaine 4 : ajout de la page favoris

---

## 3. 🛠️ Outils et méthodologie

### Environnement de développement
- **IDE** : WebStorm
- **Versioning** : Git + GitHub
- **Dépendances principales** : Vue 3, Vuetify 3, Pinia, Axios/Fetch
- **Gestion API Keys** : `.env`

### Installation & Run
- Cloner le repo : git clone https://github.com/divtec-cejef/m294-projet-vuetify-bronluc
- Installer : npm install
- Lancer : npm start

### Méthodologie
- Découpage en composants réutilisables
- Props & Emits clairs
- Store global avec Pinia
- Commits réguliers et explicites

### Choix techniques
- API sélectionnée :  https://valorant-api.com/v1
- Justification du choix : API complète 
- Endpoints utilisés :  https://valorant-api.com/v1/agents
- Limites/quotas connus : 

### Architecture (Descriptif + schéma simple + data-flow)
- `App.vue` : layout principal 
- `pages/` : pages (Index, Favoris, AgentDetail)  
- `router/` : routeur (index.js)
- `stores/` : store (app.js)



## 4. 🧪 Tests et validation

### Tests techniques
- ✅ Appels API fonctionnels  
- ✅ Persistance vérifiée après refresh (localStorage)  
- ✅ Navigation entre les vues OK
- ✅ Recherche et filtrage
- ✅ Ajout de favoris

### Tests d’UX
- Navigation intuitive  
- Recherche/filtre/tri faciles à comprendre  
- Feedback utilisateur (erreurs, vide)

### Tests d’accessibilité
- Contraste couleurs (Vuetify par défaut)  
- Labels et placeholders corrects  
- Navigation clavier possible

### Tests d’erreurs & fallback
- Liste vide → message clair affiché  

---

## 5. 🤖 Usage d’intelligence artificielle

### IA utilisée
- **Nom** : ChatGPT 
- **Version** : GPT-5 
- **Contexte** : Génération de code / Debugging / Explication de lignes de codes

### Utilisation détaillée
**Domaines d'aide :**
- Aide au code général : 50%
- Génération de snippets Vue/Vuetify : 50%  
- Aide à la structuration du projet : 75%
- Debugging : 30%  
- Recherche d’idées : 0%

### Parties codées manuellement
- Composants principaux : 50% personnel  
- Store & persistance : 50% personnel  
- Routing & navigation : 50% personnel  
- Tests & validation : 100% personnel  

### Apprentissage personnel
- Ce que j’ai appris grâce à l’IA : J’ai appris à structurer une application Vue.js avec un routeur, un store Pinia et plusieurs pages
- L’IA m’a aidé à corriger mes erreurs, comprendre le fonctionnement du store et améliorer l’organisation de mon code, ce qui m’a permis d’être plus autonome et efficace.
---

## 6. 🎯 Bilan personnel

### Ce que j’ai appris
- Compétences techniques acquises  
- Découvertes surprenantes  
- Concepts difficiles maîtrisés  

### Difficultés rencontrées
- Problèmes techniques et solutions trouvées  : routeur, composants
- Aide reçue et sources  : Chat gpt, Mr Tirole

### Réussites et fiertés
- Content du rendu final

### Améliorations possibles
- Ce que j’ajouterais avec plus de temps  :  ajout d'une page avec les armes du jeu 
- Fonctionnalités bonus envisagées  : plus de couleur(dégradé de couleur pour chaque agents)

## 7. 📚 Références & Sources
- Documentation de l’API : [Valorant-API](https://dash.valorant-api.com)  
- Usage de l’IA : voir section ci-dessus  
