<template>
    <div class="dishDetail">
        <transition name="slidedown">
            <div class="content" v-show="showDish">
                <div class="clearfix">
                    <img style="width:40%;display: block;margin-bottom: 10px; float: left;" :src="getDish.image_url"
                         alt="">
                    <h4 style="margin-left: 15px; margin-top:30px; float:left;">{{getDish.cn_name}}</h4>
                    <number-picker v-model="count"></number-picker>
                </div>

                <div class="intro">
                    <h4>单品介绍</h4>
                    <div style="margin-top: 10px;font-size: 12px;">{{getDish.cn_description}}</div>
                </div>
                <div class="material">
                    <h4>使用材料</h4>
                    <div style="margin-top: 10px">
                        <span class="materials" v-for="item in getDish.cn_materials">{{item}}</span>
                    </div>
                </div>
                <div class="price">价格待定</div>
                <mt-button v-if="canAdd" type="primary" size="small" @click="add($event)">加入订单</mt-button>
                <span v-else class="added">已添加</span>
                <div class="close" @click="close"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import numberPicker from './numberPicker'

    export default {
        name: 'dishDetail',
        components: {
            numberPicker
        },
        data() {
            return {
                addOne: false,
                count: 1
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
            },
            getDish() {
                return this.$store.state.currentDish
            },
            canAdd() {
                let add = true
                let list = this.$store.state.selectedDish
                list.forEach((val) => {
                    if (val['id'] === this.getDish['id']) {
                        add = false
                    }
                })
                return add
            }
        },
        methods: {
            add(event) {
                let dish = Object.assign(this.getDish, {
                    count: this.count.toString()
                })
                console.log(dish)
                this.$store.commit('selectedDish', dish)
            },
            close() {
                this.count = 1
                this.$store.commit('showDish', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }

    .number-picker {
        width: 150px;
        margin-left: 10px;
        margin-top: 20px;
        float: left;
    }

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
            padding: 10px;
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
            .added {
                position: absolute;
                bottom: 20px;
                right: 20px;
                width: 80px;
                height: 33px;
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

    .slidedown-enter-active, .slidedown-leave-active {
        transition: all 0.3s ease;
    }
</style>
