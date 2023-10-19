<template>
    <HeaderComponent>Recept under 30 minuter</HeaderComponent>
    <div class="flex-container">
        <div class="flex-item-one">
            <CategoryListComponent></CategoryListComponent>
        </div>
        <div class="flex-item-two">
            <SearchComponent></SearchComponent>
            <RecipesComponent></RecipesComponent>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import RecipesComponent from '../components/RecipesComponent.vue';
import CategoryListComponent from '../components/CategoryListComponent.vue';
import SearchComponent from '../components/SearchComponent.vue';

export default {
    components: {
        HeaderComponent,
        RecipesComponent,
        CategoryListComponent,
        SearchComponent
    }
};
</script>

