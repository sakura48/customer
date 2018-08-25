<template>
    <div class="dishDetail">
        <transition name="slidedown">
            <div class="content" v-show="showDish">
                <img style="width:40%;display: block;margin-bottom: 10px;" src="../../assets/logo.png" alt="">
                <div class="intro">
                    <h4>单品介绍</h4>
                    <div style="margin-top: 10px;font-size: 12px;">好吃又实惠</div>
                </div>
                <div class="material">
                    <h4>使用材料</h4>
                    <div style="margin-top: 10px">
                        <span>aaa</span>
                        <span>bbb</span>
                        <span>ccc</span>
                    </div>
                </div>
                <div class="price">110.00</div>
                <mt-button type="primary" size="small" @click="add($event)">加入订单</mt-button>
                <div class="close" @click="close"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'dishDetail',
        data() {
            return {
                addOne: false,
                circle: {
                    x: 0,
                    y: 0
                }
            }
        },
        props: {
            type: Object,
            default: function () {
                return {}
            }
        },
        computed: {
            showDish() {
                return this.$store.state.showDish
            }
        },
        methods: {
            add(event) {

            },
            close() {
                this.$store.commit('showDish', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .circle {
        position: fixed;
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 10px;
    }

    .dishDetail {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.3s;
        justify-content: center;
        align-items: center;
        display: flex;
        .content {
            position: relative;
            width: 80%;
            min-height: 50%;
            padding: 0 10px;
            border-radius: 10px;
            background-color: white;
            .intro {
                margin-bottom: 10px;
            }
            .material {
                margin-bottom: 10px;
            }
            .price {
                position: absolute;
                left: 20px;
                bottom: 20px;
                font-size: 20px;
                color: red;
                height: 33px;
                line-height: 33px;
            }
            .mint-button {
                position: absolute;
                right: 20px;
                bottom: 20px;
                background-color: #FFB311;
            }
            .close {
                position: absolute;
                left: 0;
                right: 0;
                bottom: -60px;
                width: 44px;
                height: 44px;
                margin: auto;
                background: url("../../assets/close.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        span {
            padding: 2px 6px;
            border-radius: 1000px;
            color: #a9a9a9;
            margin-right: 10px;
            background-color: rgba(255, 179, 17, 0.1);
        }
    }

    .slidedown-enter, .slidedown-leave-to {
        opacity: 1;
        transform: scale(0);
    }

    .slidedown-enter-active, .slidedown-leave-active {
        transition: all 0.3s ease;
    }
</style>
