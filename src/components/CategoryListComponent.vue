<template>
  <div class="category-background">
    <h2>Kategorier</h2>
    <nav v-for="category in categories" :key="category.id">
      <RouterLink class="router-link" :to="`/categoryrecipe/${category.id}/${category.name}`">{{
        category.name
      }}</RouterLink>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      recipes: []
    }
  },
  methods: {
    fetchCategories() {
      this.categories = null
      fetch('http://localhost:3000/categories/')
        .then((response) => response.json())
        .then((data) => {
          console.log('category data', data)
          this.categories = data
        })
    }
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>
