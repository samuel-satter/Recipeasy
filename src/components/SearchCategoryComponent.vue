<template>
    <main class="main-grid">
        <div class="search-box">
            <form>
                <div>
                    <input id="searchbox" v-model="searchBoxInput"
                        :placeholder="`Sök inom kategori ${this.$route.params.categoryId}`" name="search">
                    <button id="btn" type="button" @click="fetchData">{{ heading }}</button>
                </div>
            </form>
        </div>
        <div v-for="recipe in searchResult" :key="recipe.id">
            <div class="grid-container gradient-background main">
                <h2 class="recipe-head">
                    <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }} </RouterLink>
                    <RatingComponent :avg-rating="`${recipe.ratings.length}`">
                    </RatingComponent>
                </h2>
                <div class="recipe-img"><img :src="recipe.image" alt="picture"></div>
                <div class="recipe-foot">
                    {{ recipe.ingredients.length }} {{ nrOfIngredients }} |
                    {{ recipe.time }}
                </div>
                <div class="recipe-main">{{ recipe.instructions }}</div>
            </div>
        </div>
    </main>
</template>

<script>
import RatingComponent from './RatingComponent.vue'
export default {
    components: {
        RatingComponent
    },
    data() {
        return {
            heading: "Sök ",
            searchBoxInput: "",
            searchResult: [],
            time: "MINUTER",
            nrOfIngredients: "INGREDIENSER"
        }
    },
    methods: {
        fetchData() {
            this.searchResult = null;
            fetch(`http://localhost:3000/categories/${this.$route.params.categoryId}/recipes/?query=${this.searchBoxInput}`)
                .then((response) => response.json())
                .then((data) => { this.searchResult = data })

        }
    }
}
</script>