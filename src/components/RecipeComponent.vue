<template>
    <main v-if="recipe">
        <h1 class="u-heading">{{ recipe.name }}</h1>
        <div class="u-container">
            <div class="u-description main">{{ recipe.instructions }}</div>
            <div class="u-image"><img :src="recipe.image" alt="picture"></div>
            <div class="u-amountofingredients main">
                {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                {{ recipe.time }} {{ time }}
            </div>
            <div class="u-ingredients main" v-if="recipe.ingredients">
                <h2>Ingredienser</h2>
                <ul class="category-background">
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index"> {{ ingredient }} </li>
                </ul>
            </div>
        </div>
        <div class = "br"></div>
        <RatingComponent :recipe-id="recipe.RecipeId" :ratings="recipe.ratings"></RatingComponent>
    </main>
</template>
<script>
import RatingComponent from './RatingComponent.vue';
export default {
    components: {
        RatingComponent
    },
    data() {
        return {
            recipe: "",
            recipeId: "",
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            console.log("hello this line was accessed",this.$route.params.RecipeId)
            this.recipe = null;
            fetch(`https://localhost:3000/recipes/${this.$route.params.RecipeId}`)
                .then((response) => response.json())
                .then((data) => { this.recipe = data });
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>