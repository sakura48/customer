<template>
    <div class="footer">
        <div type="primary" class="accounts" @click="showOrder">
            结算
            <span class="circle" v-if="count">{{count}}</span>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: 'sFooter',
        data() {
            return {}
        },
        computed: {
            count() {
                return this.$store.state.selectedDish.length + this.$store.state.selectedSet.length
            }
        },
        methods: {
            showOrder() {
                if (this.count === 0) {
                    Toast('还没选择单品或套餐')
                    return false
                }
                this.$store.commit('showOrder', true)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: black;
        .accounts {
            width: 100px;
            height: 100%;
            line-height: 50px;
            text-align: center;
            font-weight: bold;
            background-color: #FFB311;
            float: right;
            .circle {
                position: absolute;
                top: -5px;
                right: 5px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                color: white;
                background-color: red;
                border-radius: 10px;
            }
        }
    }
</style>
