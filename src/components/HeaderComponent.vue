<template>
  <header>
    <h1>Recipeasy</h1>
  </header>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/category/:categoryId">Category</RouterLink>
    <RouterLink to="/recipe/:recipeId">Recipe</RouterLink>
  </div>
</template>

<script>
    export default {
    data() {
        return {}
    }
}
</script>
