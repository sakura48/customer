<template>
    <div class="number-picker">
        <div v-if="num === 0">
            <div class="add" v-tap="addOne">加入订单</div>
        </div>
        <div v-else>
            <div class="minus" v-tap="minus">-</div>
            <span class="number">{{num}}</span>
            <div class="plus" v-tap="plus">+</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'numberPicker',
        model: {
            prop: 'num',
            event: 'input'
        },
        props: {
            num: {
                type: Number,
                default: 0
            }
        },
        methods: {
            addOne(s, e) {
                e.stopPropagation()
                this.$emit('input', 1)
            },
            minus(s, e) {
                e.stopPropagation()
                if (this.num > 0) {
                    this.$emit('input', this.num - 1)
                }
            },
            plus(s, e) {
                e.stopPropagation()
                this.$emit('input', this.num + 1)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .number-picker {
        text-align: center;
        line-height: 2rem;
        .add {
            padding: 0.3rem 1rem;
            border-radius: 1000px;
            background-color: #FFB311;
            float: right;
        }
        .minus {
            float: left;
        }
        .plus {
            float: right;
            background-color: #FFB311;
        }
        .minus, .plus {
            position: relative;
            width: 2rem;
            height: 2rem;
            font-size: 18px;
            font-weight: bold;
            line-height: 2rem;
            text-align: center;
            border-radius: 50%;
            border: 1px solid #dcdcdc;
        }
        .minus:before {
            content: "";
            position: absolute;
            top: -1rem;
            right: -1rem;
            bottom: -1rem;
            left: -1rem
        }
        .plus:before {
            content: "";
            position: absolute;
            top: -1rem;
            right: -1rem;
            bottom: -1rem;
            left: -1rem
        }
        .number {
            font-size: 12px;
        }
    }

</style>
