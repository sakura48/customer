<template>
    <img v-if="success" src="http://xx.com/h5/employee/qrcode?shop_id=1&seat_no=111" alt="">
    <div v-else class="order">
        <transition name="slideup">
            <div class="content" v-show="showOrder">
                <ul class="list">
                    <li v-for="item in getDishes" :key="item.id">
                        <div class="name">{{item.cn_name}}</div>
                        <div class="count">&times;{{item.count}}</div>
                        <div class="del">
                            <mt-button size="small" type="danger" @click="delDishes(item)">删除</mt-button>
                        </div>
                    </li>
                    <li v-for="item in getSets" :key="item.id">
                        <div class="name">{{item.cn_name}}</div>
                        <div class="count">&times;{{item.count}}</div>
                        <div class="del">
                            <mt-button size="small" type="danger" @click="delSets(item)">删除</mt-button>
                        </div>
                    </li>
                </ul>
                <input type="text" v-model="seat_no" class="tableNum" placeholder="请输入桌号">
                <mt-button class="submit" size="large" type="primary" :disabled="seat_no === ''" @click="onSubmit">确认提交
                </mt-button>
                <div class="close" @click="close"></div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'order',
        data() {
            return {
                success: false,
                seat_no: '',
                dishes: [],
                sets: []
            }
        },
        computed: {
            showOrder() {
                return this.$store.state.showOrder
            },
            getDishes() {
                return this.$store.state.selectedDish
            },
            getSets() {
                return this.$store.state.selectedSet
            }

        },
        methods: {
            onSubmit() {
                let params = {
                    shop_id: '1',
                    seat_no: this.seat_no,
                    dishes: this.getDishes,
                    sets: this.getSets
                }
                this.$ajax.post('/h5/customer/order/submit', JSON.stringify(params)).then((res) => {
                    this.success = true
                }).catch((err) => {
                    this.$message.error(err)
                })
            },
            // 删除单品
            delDishes(item) {
                this.getDishes.forEach((val, index) => {
                    if (val['id'] === item['id']) {
                        this.$store.commit('delDish', index)
                    }
                })
            },
            // 删除套餐
            delSets(item) {
                this.getSets.forEach((val, index) => {
                    if (val['id'] === item['id']) {
                        this.$store.commit('delSet', index)
                    }
                })
            },
            close() {
                this.$store.commit('showOrder', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .order {
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
            min-height: 60%;
            padding: 15px;
            border-radius: 10px;
            background-color: white;
            .list {
                height: 250px;
                li {
                    padding: 5px 0;
                    height: 44px;
                    line-height: 44px;
                    font-size: 16px;
                    display: flex;
                    .name {
                        flex: 6;
                    }
                    .count {
                        flex: 2;
                    }
                    .del {
                        text-align: right;
                        flex: 2;
                    }
                }
            }
            .tableNum {
                width: calc(100% - 24px);
                padding: 8px 12px;
                margin-top: 15px;
                border: 1px solid #dcdcdc;
                border-radius: 4px;
                display: block;
            }
            .tableNum::placeholder {
                color: #999;
            }
            .submit {
                position: absolute;
                left: 0;
                right: 0;
                width: 90%;
                bottom: 15px;
                margin: 0 auto;
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
    }

    .slideup-enter, .slideup-leave-to {
        opacity: 1;
        transform: scale(0);
    }

    .slideup-enter-active, .slidedup-leave-active {
        transition: all 0.3s ease;
    }
</style>
