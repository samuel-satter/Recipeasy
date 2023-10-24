<template>
  <div class="main-grid">
    <div class="search-box">
      <input type="text" v-model="searchInput" placeholder="Sök och gå till recept" required />
      <RouterLink class="router-link" :to="'/recipe/' + searchInput">Till recept</RouterLink>
    </div>
    <main class="recipe-grid">
      <div class="grid-container gradient-background">
        <h2 class="recipe-head">
          {{ recipes.name }}
        </h2>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      time: 'MINUTER',
      nrOfIngredients: 'INGREDIENSER',
      searchInput: null
    }
  },
  methods: {
    fetchData() {
      this.recipes = null
      fetch(`http://localhost:3000/recipe?id=${this.searchInput}`)
        .then((response) => {
          const responseJson = response.json()
          return responseJson
        })
        .then((data) => {
          this.recipes = data
        })
    }
  }
}
</script>

<style scoped>
.router-link {
  background-color: gray;
  margin-left: 1%;
}
</style>
