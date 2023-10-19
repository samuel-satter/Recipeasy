<template>
<RecipeComponent></RecipeComponent>
<CommentComponent></CommentComponent>
</template>

<script>
import CommentComponent from '../components/CommentComponent.vue';
import RecipeComponent from '../components/RecipeComponent.vue';
export default{
    components: {
        CommentComponent,
        RecipeComponent
    }
}
</script>