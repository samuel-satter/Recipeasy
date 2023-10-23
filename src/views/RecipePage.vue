<template>
<RecipeComponent></RecipeComponent>
<!-- <CommentComponent></CommentComponent> -->
<RatingComponent></RatingComponent>
</template>

<script>
// import CommentComponent from '../components/CommentComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';
import RecipeComponent from '../components/RecipeComponent.vue';
export default{
    components: {
        // CommentComponent,
        RecipeComponent,
        RatingComponent
    }
}
</script>