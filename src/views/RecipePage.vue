<template>
<RecipeComponent/>
<CommentComponent/>
<RatingComponent/>
</template>

<script>
import RecipeComponent from '../components/RecipeComponent.vue';
import CommentComponent from '../components/CommentComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';
export default{
    components: {
        RecipeComponent,
        CommentComponent,
        RatingComponent
    }
}
</script>