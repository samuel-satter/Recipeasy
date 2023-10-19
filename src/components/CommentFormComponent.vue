<template>
    <div class="comment-box">
        <div class="form-group">
            <input type="text" placeholder="Ditt namn" v-model="inputName" class="form-control">
        </div>
        <div class="form-group">
            <textarea placeholder="Skriv din kommentar" v-model="inputComment" class="form-control"></textarea>
        </div>
        <div class="center-button">
            <Button :disabled="!isInputValid" @btn-click="$emit('submit')" btn-type="success">Skicka</Button>
        </div>
    </div>
</template>

<script>
import Button from './ButtonComponent.vue';

export default {
    components: {
        Button
    },
    props: {
        isInputValid: Boolean,
        name: String,
        comment: String
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    data() {
        return {
            inputName: this.name,
            inputComment: this.comment
        }
    },
    watch: {
        name(newName) {
            this.$emit('input', { name: newName, comment: this.inputComment });
        },
        comment(newComment) {
            this.$emit('input', { name: this.inputName, comment: newComment });
        }
    }
}
</script>