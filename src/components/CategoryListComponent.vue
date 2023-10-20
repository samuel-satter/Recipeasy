<template>
    <div class="category-background">
        <h2>Kategorier</h2>
        <nav v-for="category in categories" :key="category.CategoryId" :class="{isCurrent: this.$route.path === `/category/${category.name}`}">
            <RouterLink class="router-link" :to="`/category/${category.name}`">{{ category.name }} {{ category.count }}</RouterLink>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    methods: {
        fetchData() {
            this.categories = null
            fetch("http://localhost:3000/categories")
            .then((response) => response.json())
            .then((data) => {
                this.categories = data
            })
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>