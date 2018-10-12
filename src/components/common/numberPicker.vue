<template>
    <div class="number-picker">
        <div class="minus" @click="minus">-</div>
        <span class="number">{{value}}</span>
        <div class="plus" @click="plus">+</div>
    </div>
</template>

<script>
    export default {
        name: 'numberPicker',
        props: {
            value: {
                default: '1'
            }
        },

        methods: {
            minus() {
                if (this.value > 1) {
                    this.$emit('input', this.value - 1)
                }
            },
            plus() {
                this.$emit('input', this.value + 1)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .number-picker {
        text-align: center;
        line-height: 3rem;
        .minus {
            float: left;
        }
        .plus {
            float: right;
            background-color: #FFB311;
        }
        .minus, .plus {
            width: 3rem;
            height: 3rem;
            font-size: 18px;
            font-weight: bold;
            line-height: 3rem;
            text-align: center;
            border-radius: 50%;
            border: 1px solid #dcdcdc;
        }
        .number{
            font-size: 12px;
        }
    }

</style>
