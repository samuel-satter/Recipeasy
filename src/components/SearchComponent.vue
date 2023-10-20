<template>
    <div class="main-grid">
        <div class="search-box">
            <div id="search-icon">
                <img id="searchImg" src="../assets/search.png">
            </div>
            <input type="text" id="searchbox" placeholder="Sök bland dina favoritrecept . . ." required>
            <input type="submit" value="Sök" id="btn" @click="fetchData">
        </div>
        <main class="recipe-grid" v-for="recipe in recipes" :key="recipe.id">
            <div class="grid-container gradient-background">
                <h2 class="recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }}</RouterLink>
                    <!-- <RatingComponent :avg-rating="`${recipe.ratings.length}`"> -->
                    <!-- </RatingComponent> -->
                </h2>
                <div class="recipe-img"><img :src="recipe.image" alt="picture"></div>
                <div class="recipe-main main">{{ recipe.instructions }}</div>
                <!-- <div class="recipe-foot main">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.time }}
                </div> -->
            </div>
        </main>
    </div>
</template>

<script>
// import RatingComponent from './RatingComponent.vue'
export default {
    components: {
       /*  RatingComponent */
    },
    data() {
        return {
            recipes: [],
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        async fetchData() {
            let inputSearchBox = document.getElementById("searchbox").value;
            this.recipes = null;
            console.log("klsdfjasdklfjasdklfklasdjljkasdfjfklasdfjkladsö", inputSearchBox)
            const response = await fetch(`http://localhost:3000/recipe?id=${inputSearchBox}`);
            this.recipes = await response.json();
        }
    }
}
</script>