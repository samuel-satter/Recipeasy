<template>
    <h1>{{ this.$route.params.categoryId }}</h1>
    <div class="main" v-if="category">
        <div v-for="recipe in category" :key="recipe.recipeId">
                <div class="grid-container">
                    <div class="grid-item recipe-head">
                        <RouterLink class="router-link" :to="`/recipe/${recipe.recipeId}`">{{ recipe.name }}</RouterLink>
                        <RatingComponent :avg-rating="`${recipe.avgRating}`"></RatingComponent>
                    </div>
                    <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div>
                    <div class="grid-item recipe-description">{{ recipe.description }}</div>
                    <div class="grid-item recipe-foot">
                        {{ recipe.ingredients.length }}
                        {{ recipe.time }}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import RatingComponent from './RatingComponent.vue';
export default {
    components: {
        RatingComponent
    },
    data() {
        return {
            category: "",
            categoryId: "",
            time: "MINUTER"
        }
    },
    methods: {
        fetchData() {
            this.category = null;
            fetch(`http://localhost:3000/categories/${this.$route.params.categoryId}/recipes`)
                .then((response) => response.json())
                .then((data) => { this.category = data })

        }
    },
    created() {
        this.$watch(
            () => this.$route.params,
            (toParams) => {
                this.categoryId = this.fetchData(toParams || "");
            }
        )
    },
    mounted() {
        this.fetchData();
    }
}
</script>