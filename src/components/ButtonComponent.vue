<template>
    <button 
        @click="$emit('btnClick')" 
        :class="[defaultButtonType, buttonType]"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    data() {
        return {
            defaultButtonType: "btn"
        }
    },
    props: {
        buttonType: String
    }
}
</script>