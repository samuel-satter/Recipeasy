<template>
  <h1 class="category-title">{{ this.$route.params.name }}</h1>
  <div class="main" v-if="category">
    <div v-for="recipe in category" :key="recipe.id">
      <main class="recipe-card">
        <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">
          <h1 class="u-heading">
            {{ recipe.name }}
          </h1>
        </RouterLink>
        <div class="u-container">
          <div class="u-image"><img :src="recipe.image" alt="picture" /></div>
          <div>
            Mängden ingredienser:
            {{ recipe.ingredients.length }}
          </div>
          <div>
            Tid:
            {{ recipe.time }}
          </div>
          <div class="u-ingredients main" v-if="recipe.ingredients">
            <h2>Ingredienser</h2>
            <ul class="category-background">
              <li
                class="list-of-ingredients"
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
              >
                {{ ingredient }}
              </li>
            </ul>
          </div>
        </div>
        <div class="br"></div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: []
    }
  },
  methods: {
    fetchData() {
      this.category = null
      fetch(`http://localhost:3000/categoryrecipes?id=${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          this.category = data
          console.log('data from backend', data)
        })
    }
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<style>
.category-title {
  color: rgba(196, 120, 21, 0.556);
}
.recipe-card {
  background-color: rgba(1, 25, 5, 0.17);
  border-radius: 2%;
  margin-top: 1.5%;
}
.list-of-ingredients {
  list-style-position: inside;
}
</style>
