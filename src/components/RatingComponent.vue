<template>
  <div>
    <span>
      <p v-if="rated">Tack för din röst!</p>
      <!-- <StarRating :rating="this.averageRating" @rating-selected="setRating"></StarRating>  -->
      <input type="text" v-model="score">
      <button @click="submitRating">Submit Rating</button>
    </span>
  </div>
</template>

<script>
// import StarRating from 'vue-star-rating'

export default {
  data() {
    return {
      averageRating: 0,
      rated: false,
      selectedRating: null,
      score: null
    }
  },
  methods: {
    setRating(newRating) {
      this.selectedRating = newRating;
    },
    async submitRating() {
      const res = await fetch(`http://localhost:3000/recipes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          id: this.$route.params.id,  
          rating: this.score
        }),
      });

      if (res.ok) {
        console.log("im here")
        this.averageRating = this.selectedRating;
        this.rated = true;
      }
    },
    async getRating() {
      const res = await fetch(`http://localhost:3000/recipe?id=${this.$route.params.id}`);
      const data = await res.json();
      this.averageRating = data.rating;
    },
  },
  watch: {
    $route() {
      this.getRating()
    }
  },
  created() {
    this.getRating();
  },
  mounted() {
    // this.submitRating();
  },
  components: {
    // StarRating
  }
}
</script>