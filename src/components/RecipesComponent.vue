<template>
    <div v-if="recipes">
        <div v-for="recipe in recipes" :key="recipe.id">
            <h2>Recept:
                <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }}</RouterLink>
                <!-- <RatingComponent :avgRating="`${recipe.avgRating}`"></RatingComponent> -->
            </h2>
            <div><img :src="recipe.image" alt="recipe image"></div>
            <div>{{ recipe.instructions }}</div>
            <div>
                {{ recipe.ingredients.length }}
                {{ recipe.time }}
            </div>
        </div>
    </div>
</template>

<script>
// import RatingComponent from './RatingComponent.vue'
export default {
    components: {
            // RatingComponent
        },
    data() {
        return {
            recipes: "",
            time: "min"
        }
    },
    methods: {
    fetchData() {
        fetch("http://localhost:3000/recipes")
        .then((response) => response.json())
        .then((data) => {this.recipes = data})
    },
},
    mounted() {
        console.log("recipes component mounted")
    this.fetchData()
    }
}
</script>