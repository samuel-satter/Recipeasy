<template>
    <h1>{{ this.$route.params.name }}</h1>
    <div class="main" v-if="category">
      <div v-for="recipe in category" :key="recipe.id">
        <div class="grid-container">
           <div class="grid-item recipe-head">
            <RouterLink class="router-link" :to="`/recipe/${recipe.id}`">{{ recipe.name }}</RouterLink>
            <!-- <RatingComponent :avg-rating="`${recipe.avgRating}`"></RatingComponent> -->
          </div> 
          <!-- <div class="grid-item recipe-img"><img :src="recipe.imageUrl" alt="picture"></div> -->
          <!-- <div>{{ recipe.name }}</div> -->
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
  // import RatingComponent from './RatingComponent.vue';
  
  export default {
    components: {
      // RatingComponent,
    },
    data() {
      return {
        category: [],
      };
    },
    methods: {
      fetchData() {
        this.category = null;
        fetch(`http://localhost:3000/categoryrecipes?id=${this.$route.params.id}`)
          .then((response) => response.json())
          .then((data) => {
            this.category = data;
            console.log("data from backend", data)
          });
      },
    },
    created() {
      // this.fetchData();
    },
    mounted() {
      this.fetchData();
      console.log(this.category)
    },
    updated() {
      console.log(this.category)
    }
  };
  </script>