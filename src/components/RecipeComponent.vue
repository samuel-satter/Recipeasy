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
          <li
            class="list-of-ingredients"
            v-for="(ingredient, index) in recipe.ingredients"
            :key="index"
          >
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="u-description main">
      <h2>Gör så här!</h2>
      <ol class="ol-list-style">
        <li v-for="(instructions, index) in recipe.instructions" :key="index">
          {{ instructions }}
        </li>
      </ol>
    </div>
    <div>
      <hr />
      <ul class="no-bullets">
        <li class="list-items" v-for="comment in recipe.comments" :key="comment.date">
          <strong> {{ comment.name }}</strong> |
          {{ new Date(comment.date).toISOString().split('T')[0] }}
          <p>{{ comment.comment }}</p>
        </li>
      </ul>
    </div>
    <div class="br"></div>
  </main>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      recipe: '',
      recipeId: '',
      time: '',
      nrOfIngredients: 'ingredienser',
      comment: ''
    }
  },
  methods: {
    fetchData() {
      console.log('hello this line was accessed', this.$route.params.id)
      this.recipe = null
      fetch(`http://localhost:3000/recipe?id=${this.$route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('data: ', data)
          this.recipe = data[0]
        })
    }
  },

  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.ol-list-style {
  list-style: inside;
  list-style-type: decimal;
}
.list-items {
  margin-top: 1%;
  background-color: rgba(31, 68, 27, 0.128);
}
.no-bullets {
  list-style: none;
}
.list-of-ingredients {
  list-style-position: inside;
}
.textarea {
  margin-top: 3%;
}
</style>
