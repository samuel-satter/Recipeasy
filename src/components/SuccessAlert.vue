<template>
    <div class="alert-box">
        <Alert alert-type="success" :alert-message="message"></Alert>
    </div>
</template>

<script>
import Alert from './Alert.vue';

export default {
    components: {
        Alert
    },
    props: {
        message: String
    }
}
</script>