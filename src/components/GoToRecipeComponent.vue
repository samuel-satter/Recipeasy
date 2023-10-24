<template>
    <div class="main-grid">
        <div class="search-box">
            <input type="text" v-model="searchInput" id="searchbox" placeholder="Sök och gå till recept" required>
            <!-- <input type="submit" value="Sök" id="btn" @click="fetchData()"> -->
              <RouterLink class="router-link" :to="'/recipe/' + searchInput">Till recept</RouterLink>
            <!-- <input type="submit" value="sök" > -->
        </div>
        <main class="recipe-grid">
            <div class="grid-container gradient-background">
                <h2 class="recipe-head">
                    {{ recipes.name }}
                    <!-- <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }}</RouterLink> -->
                    <!-- <RatingComponent :avg-rating="`${recipe.ratings.length}`"> -->
                    <!-- </RatingComponent> -->
                </h2>
                <!-- <div class="recipe-img"><img :src="recipe.image" alt="picture"></div> -->
                <!-- <div class="recipe-main main">{{ recipe.instructions }}</div> -->
                <!-- <div class="recipe-foot main">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.time }}
                </div> -->
            </div>
        </main>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

// import RatingComponent from './RatingComponent.vue'
export default {
    components: {
       /*  RatingComponent */
    },
    data() {
        return {
            recipes: [],
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER",
            searchInput: null
        }
    },
    methods: {
            fetchData() {
            let inputSearchBox = document.getElementById("searchbox").value;
            this.recipes = null;
            console.log("klsdfjasdklfjasdklfklasdjljkasdfjfklasdfjkladsö", inputSearchBox)
            fetch(`http://localhost:3000/recipe?id=${this.searchInput}`)
            .then((response) => { 
                const responseJson = response.json()
                console.log("response json", responseJson)
                return responseJson;})
                .then((data) => { 
                    console.log("data", data)
                    this.recipes = data });
    
            console.log(this.recipes)
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