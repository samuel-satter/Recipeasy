<template>
    <div>
        <input type="text" v-model="search" placeholder="Sök efter ett recept">
        <div v-for="recipe in filteredRecipes" :key="recipe.id">
            <h2>{{ recipe.name }}</h2>
            <img :src="recipe.image" :alt="'Image of ' + recipe.name">
            <p>Rating : {{ recipe.rating }}</p>
            <p>Ingredients : {{ recipe.ingredients.length }}</p>
            <p>Time : {{ recipe.time }}</p>
        </div>    
        
        <div v-for="category in categories" :key="category.id">
            <h2>{{ category.name }} ({{ category.recipes.length }})</h2>
            <router-link :to="{ name: 'CategoryPage', params: { id: category.id}}">View Category</router-link>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      recipes: [],
      categories: []
    }
  },
  computed: {
    filteredRecipes() {
        return this.recipes.filter(recipe => recipe.name.includes(this.search));
    },
    categoriesWithRecipeCount() {
        return this.categories.map(category => {
            const count = this.recipes.filter(recipe => recipe.category === category.name).length;
            return { ...category, count };
        });
    }
},
    
    async created() {
        try {
            const responseRecipes = await fetch('http://localhost:3000/recipes')
            const responseCategories = await fetch('http://localhost:3000/categories')
            this.recipes = await responseRecipes.json();
            this.categories = await responseCategories.json();
        } catch (error) {
            console.error(error)
        }
    }   
}
</script>