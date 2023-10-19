<template>
    <div>
      <span
        class="rating"
        v-for="num in 5"
        :key="num"
        @click="selectRating(num)"
        :class="{ 'selected': num <= parseInt(avgRating) }"
      >
        {{ num }}
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      avgRating: {
        type: String,
        required: true
      }
    },
    methods: {
      selectRating(num) {
        this.$emit('update:avgRating', num.toString());
      }
    }
  };
  </script>