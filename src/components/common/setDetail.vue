<template>
    <transition name="add">
        <div class="setDetail">
            <transition name="slidedown">
                <div class="content" v-show="showSet">
                    <img style="width:40%;display: block;margin-bottom: 10px;" :src="getSet.image_url" alt="">
                    <div class="intro">
                        <h4>套餐介绍</h4>
                        <div style="margin-top: 10px;font-size: 12px;">{{getSet.cn_description}}</div>
                    </div>
                    <div class="material">
                        <h4>单品组成</h4>
                        <div style="margin-top: 10px">
                            <span class="materials" v-for="item in getSet.dishes">{{item}}</span>
                        </div>
                    </div>
                    <div class="price">110.00</div>
                    <mt-button v-if="canAdd" type="primary" size="small" @click="add($event)">加入订单</mt-button>
                    <span v-else class="added">已添加</span>
                    <div class="close" @click="close"></div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'setDetail',
        props: {
            type: Object,
            default: function () {
                return {}
            }
        },
        computed: {
            showSet() {
                return this.$store.state.showSet
            },
            getSet() {
                return this.$store.state.currentSet
            },
            canAdd() {
                let canAdd = true
                let list = this.$store.state.selectedSet
                list.forEach((val) => {
                    if (val['id'] === this.getSet['id']) {
                        canAdd = false
                    }
                })
                return canAdd
            }
        },
        methods: {
            add(event) {
                this.$store.commit('selectedSet', this.getSet)
            },
            close() {
                this.$store.commit('showSet', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .setDetail {
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
            .added{
                position: absolute;
                bottom:20px;
                right:20px;
                width:80px;
                height:33px;
                line-height: 33px;
                text-align: center;
                display: inline-block;
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
        .materials {
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

    .slidedown-enter-active,.slidedown-leave-active {
        transition: all 0.3s ease;
    }
</style>
