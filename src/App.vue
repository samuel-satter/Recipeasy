<template>
  <header>
    <RouterLink to="/">Home</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>