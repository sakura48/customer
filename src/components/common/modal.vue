<template>
    <transition name="fade">
        <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: 'modal',
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
