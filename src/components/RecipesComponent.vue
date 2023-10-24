<template>
    <div>
        <input type="text" v-model="searchText">
    </div>
    <div v-if="recipes">
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
            <h2>Recept:
                <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }}</RouterLink>
            </h2>
            <div><img :src="recipe.image" alt="recipe image"></div>
            <div>{{ recipe.instructions }}</div>
            <div>
                Mängden ingredienser:
               {{ recipe.ingredients.length }}                
            </div>
            <div>
                Tid:
                {{ recipe.time }}
            </div>
            <div>
                Rating:
                {{ recipe.averageRating }}
            </div>
            <div>
                Comments:
                {{ recipe.comments }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        },
    data() {
        return {
            recipes: "",
            time: "min",
            searchText: ""
        }
    },
    methods: {
    fetchData() {
        fetch(`http://localhost:3000/matching-recipes?searchString=${this.searchText}`)
        .then((response) => response.json())
        .then((data) => {this.recipes = data})
    },
},
    mounted() {
        console.log("recipes component mounted")
    this.fetchData()
    },
    updated() {
        this.fetchData()
    }
}
</script>

<style>
.recipe-card {
    background-color: rgba(1, 25, 5, 0.17); 
    border-radius: 2%; 
    margin-top: 1.5%
}
</style>