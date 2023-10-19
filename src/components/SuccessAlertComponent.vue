<template>
    <div class="alert-box">
        <AlertComponent alert-type="success" :alert-message="message"></AlertComponent>
    </div>
</template>

<script>
import AlertComponent from './AlertComponent.vue';

export default {
    components: {
        AlertComponent
    },
    props: {
        message: String
    }
}
</script>