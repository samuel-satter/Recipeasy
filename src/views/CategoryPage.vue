<template>
    <HeaderComponent></HeaderComponent>
    <CategoryListComponent></CategoryListComponent>
    <SearchCategoryComponent></SearchCategoryComponent>
    <CategoryComponent></CategoryComponent>
</template>
<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import CategoryListComponent from '../components/CategoryListComponent.vue';
import CategoryComponent from '../components/CategoryComponent.vue';
import SearchCategoryComponent from '../components/SearchCategoryComponent.vue';
export default {
    components: {
        HeaderComponent,
        CategoryListComponent,
        CategoryComponent,
        SearchCategoryComponent
    }
}
</script>