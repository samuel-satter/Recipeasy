<template>
    <div class="prev-comments">
        <h3>Tidigare kommentarer</h3>
        <ul>
            <li v-for="comment in comments" :key="comment._id">
                <strong>{{ comment.name }}</strong> - {{ formatDate(comment.createdAt) }}
                <p>{{ comment.comment }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        comments: Array
    },
    methods: {
        formatDate(dateString) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }
    }
}
</script>