<template>
<HeaderComponent/>
<RecipeComponent/>
<CommentComponent/>
<RatingComponent/>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import RecipeComponent from '../components/RecipeComponent.vue';
import CommentComponent from '../components/CommentComponent.vue';
import RatingComponent from '../components/RatingComponent.vue';
export default{
    components: {
        HeaderComponent,
        RecipeComponent,
        CommentComponent,
        RatingComponent
    }
}
</script>