<template>
    <div class="dish">
        <mt-header title="点菜" style="font-size: 20px;height:4rem;"></mt-header>
        <div class="banner">
            <ul :style="{width: bannerWidth}">
                <li v-for="(key,value) in list" :key="key">{{value}}</li>
            </ul>
        </div>
        <div class="menu">
            <div class="menu-left">
                <ul>
                    <li>本店特色</li>
                    <li>套餐</li>
                    <li>主食</li>
                    <li>甜品</li>
                </ul>
            </div>
            <div class="menu-right">
                <div class="item" v-for="(key,value) in list" :key="key">
                    <img :src="imgurl" alt="">
                    <div class="intro">
                        <h2>大饼鸡蛋</h2>
                        <number-picker></number-picker>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numberPicker from '../common/numberPicker'
    import dishDetail from '../common/dishDetail'

    export default {
        name: 'dish',
        components: {
            dishDetail,
            numberPicker
        },
        data() {
            return {
                imgurl: require('../../assets/logo.png'),
                list: [1, 2, 3, 4, 5, 6, 7, 8]
            }
        },
        computed: {
            bannerWidth() {
                return this.list.length * 20 + 'rem'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dish {
        width: 100%;
        height: 100%;
        background-color: orange;
        .mint-header {
            width: 100%;
        }
        .banner {
            width: 100%;
            padding: 1.5rem 0;
            background-color: green;
            overflow-x: scroll;
            ul {
                height: 14rem;
                li {
                    width: 18rem;
                    height: 12rem;
                    background-color: blue;
                    padding: 1rem;
                    float: left;
                }
            }
        }
        .menu {
            height: calc(100% - 21rem);
            display: flex;
            .menu-left {
                width: 7.5rem;
                height: 100%;
                ul {
                    li {
                        padding: 1.4rem 0;
                        font-size: 12px;
                        text-align: center;
                    }
                }
            }
            .menu-right {
                width: 24.5rem;
                height: 100%;
                overflow-y: scroll;
                .item {
                    width: 20.5rem;
                    height: 10rem;
                    margin: 1.5rem auto;
                    background-color: red;
                    display: flex;
                    img {
                        width: 9rem;
                    }
                    .intro {
                        width: 11rem;
                        padding-left: 0.5rem;
                        flex-direction: column;
                        align-items: center;
                        display: flex;
                        h2 {
                            width: 100%;
                            margin: auto;
                        }
                        .number-picker {
                            width: 100%;
                            margin: auto;
                        }
                    }
                }
            }
        }
    }
</style>
