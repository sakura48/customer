<template>
    <ul
        style="background-color: white;"
        class="dishList">
        <li class="cell" v-for="item in dishList" @click="showDetail(item)">
            <img :src="item.image_url" alt="">
            <div class="content">
                <h4>{{item.cn_name}}</h4>
                <h6>
                    <span>味道好</span><span>分量足</span>
                </h6>
            </div>
        </li>
    </ul>
    <!--<div class="dishList">-->
    <!--<div class="cell">-->
    <!--<img src="../../../assets/logo.png" alt="">-->
    <!--<div class="content">-->
    <!--<h4>vue套餐</h4>-->
    <!--<h6>-->
    <!--<span>味道好</span><span>分量足</span>-->
    <!--</h6>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: 'dish',
        data() {
            return {
                loading: false
            }
        },
        props: {
            dishList: {
                type: Array,
                default: function () {
                    return {}
                }
            }
        },
        methods: {
            showDetail(dish) {
                this.$store.commit('currentDish', dish)
                this.$store.commit('showDish', true)
            },
            // loadMore() {
            //     this.loading = true
            //     setTimeout(() => {
            //         let last = this.list[this.list.length - 1]
            //         for (let i = 1; i <= 10; i++) {
            //             this.list.push(last + i)
            //         }
            //         this.loading = false
            //     }, 2500)
            // }
        }
    }
</script>

<style lang="scss" scoped>
    .dishList {
        background-color: white;
        .cell {
            height: 100px;
            padding: 0 10px 20px 10px;
            display: flex;
            img {
                width: 100px;
                height: 100px;
            }
            .content {
                h4 {
                    width: 100%;
                    margin-left: 12px;
                    margin-top: 10px;
                }
                h6 {
                    width: 100%;
                    margin-left: 12px;
                    margin-top: 10px;
                    span {
                        float: left;
                        padding: 2px 6px;
                        border-radius: 1000px;
                        color: #a9a9a9;
                        margin-right: 10px;
                        background-color: rgba(255, 179, 17, 0.1);
                    }
                }
            }

        }
    }
</style>
