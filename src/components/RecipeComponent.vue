<template>
  <main v-if="recipe">
    <h1 class="u-heading">{{ recipe.name }}</h1>
    <div class="u-container">
      <div class="u-description main">{{ recipe.instructions }}</div>
      <div class="u-image"><img :src="recipe.image" alt="picture" /></div>
      <div class="u-amountofingredients main">
        {{ recipe.ingredients.length }} {{ nrOfIngredients }} | {{ recipe.time }} {{ time }}
      </div>
      <div class="u-ingredients main" v-if="recipe.ingredients">
        <h2>Ingredienser</h2>
        <ul class="category-background">
          <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
    <div class="br"></div>
    <RatingComponent :recipe-id="recipe.id" :ratings="recipe.ratings"></RatingComponent>
    <div>
      <textarea type="textarea" v-model="comment" rows="2"></textarea>
      <br/>
      <button @click="submitComment">Submit Comment</button>
    </div>
  </main>
</template>
<script>
import RatingComponent from './RatingComponent.vue';
export default {
    props: ['id'],
    components: {
        RatingComponent
    },
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
        async submitComment() {
            await fetch(`http://localhost:3000/comment/`, {
            method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
            body: JSON.stringify({
                id: this.$route.params.id,
                comment: this.comment
         }),
      });
    }},

    mounted() {
        this.fetchData()
    },
    // updated() {
    //     console.log("recipe", this.recipe)
    // }
}
</script>
