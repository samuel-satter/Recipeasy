<template>
  <main v-if="recipe">
    <h1 class="u-heading">{{ recipe.name }}</h1>
    <div class="u-container">
      <div class="u-image"><img :src="recipe.image" alt="picture" /></div>
      <div class="u-amountofingredients main">
        {{ recipe.ingredients.length }} {{ nrOfIngredients }} | {{ recipe.time }} {{ time }}
      </div>
      <div class="u-ingredients main" v-if="recipe.ingredients">
        <h2>Ingredienser</h2>
        <ul class="category-background">
          <li class="list-of-ingredients" v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
    <div class="u-description main">{{ recipe.instructions }}</div>
    <div class="br"></div>
  </main>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            recipe: "",
            recipeId: "",
            time: "",
            nrOfIngredients: "ingredienser",
            comment: ""
        }
    },
    methods: {
        fetchData() {
            console.log("hello this line was accessed",this.$route.params.id)
            this.recipe = null;
            fetch(`http://localhost:3000/recipe?id=${this.$route.params.id}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log("data: ", data)
                    this.recipe = data[0] });
        },
},

    mounted() {
        this.fetchData()
    },
}
</script>

<style scoped>
.list-of-ingredients {
    list-style-position: inside;
}
.textarea{
    margin-top: 3%;
}
</style>
