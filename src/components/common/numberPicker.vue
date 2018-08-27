<template>
    <div class="number-picker">
        <div class="minus" @click="minus">-</div>
        <div class="number">{{value}}</div>
        <div class="plus" @click="plus">+</div>
    </div>
</template>

<script>
    export default {
        name: 'numberPicker',
        props: {
            value: {
                default: ''
            }
        },

        methods: {
            minus() {
                this.$emit('input', this.value - 1) // 这儿必须用input 发送数据，发送的数据会被父级v-model=“test”接受到，再被value=test传回来。
            },
            plus() {
                this.$emit('input', this.value + 1)
            }
        }

    }
</script>

<style lang="scss" scoped>

    .minus, .plus {
        width: 10px;
        height: 10px;
        line-height: 10px;
        text-align: center;
        border-radius: 50%;
    }
</style>
