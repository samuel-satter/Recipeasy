<template>
  <div>
    <span>
      <hr />
      <div class="rate" v-if="!rated">
        <h4>Vad tyckte du om receptet?</h4>
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          v-model="score"
          @change="submitRating"
        />
        <label for="star5" title="text">5 stars</label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          v-model="score"
          @change="submitRating"
        />
        <label for="star4" title="text">4 stars</label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          v-model="score"
          @change="submitRating"
        />
        <label for="star3" title="text">3 stars</label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          v-model="score"
          @change="submitRating"
        />
        <label for="star2" title="text">2 stars</label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          v-model="score"
          @change="submitRating"
        />
        <label for="star1" title="text">1 star</label>
      </div>
      <h2 v-else class="text">Tack för din röst</h2>
    </span>
  </div>
</template>

<script>
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
      this.selectedRating = newRating
    },
    async submitRating() {
      console.log('Rating is not null', this.rating)
      const res = await fetch(`http://localhost:3000/recipes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.$route.params.id,
          rating: this.score
        })
      })

      if (res.ok) {
        console.log('im here')
        this.averageRating = this.selectedRating
        this.rated = true
      }
    },
    async getRating() {
      const res = await fetch(`http://localhost:3000/recipe?id=${this.$route.params.id}`)
      const data = await res.json()
      this.averageRating = data.rating
    }
  },
  watch: {
    $route() {
      this.getRating()
    }
  },
  created() {
    this.getRating()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.rate {
  float: left;
  height: 46px;
  margin-bottom: 4%;
  text-align: left;
  position: relative;
}
.rate:not(:checked) > input {
  position: relative;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: left;
  margin-bottom: 50%;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 10x;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: '★ ';
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}

.text {
  color: green;
}
</style>
