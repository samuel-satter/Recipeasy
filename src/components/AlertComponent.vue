<template>
    <div :class="['alert', alertTypeClass]">
        {{ alertMessage }}
    </div>
</template>

<script>
export default {
    props: {
        alertType: {
            type: String,
            default: 'info' 
        },
        alertMessage: String
    },
    computed: {
        alertTypeClass() {
            const typeClassMap = {
                success: 'alert-success',
                warning: 'alert-warning',
                error: 'alert-error',
                info: 'alert-info'
            };
            return typeClassMap[this.alertType] || 'alert-info';
        }
    }
}
</script>

<style scoped>
.alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
}
.alert-success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}
.alert-warning {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
}
.alert-error {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
}
.alert-info {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
</style>