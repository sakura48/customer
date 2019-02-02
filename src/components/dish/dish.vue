<template>
    <div class="dish">
        <mt-header title="点菜" style="font-size: 20px;height:4rem;"
                   :style="{backgroundColor:$store.state.themeColor}"></mt-header>
        <div class="banner">
            <ul :style="{width: bannerWidth}">
                <li v-for="item in list" :key="item.id">
                    <div class="item" style="">
                        <img :src="banner" alt="">
                        <h3>
                            <span>{{item.name}}</span>
                            <span>￥110</span>
                        </h3>
                    </div>
                </li>
            </ul>
        </div>
        <div class="menu">
            <div class="menu-left">
                <ul>
                    <li :class="index === key ? 'active':''" v-for="(item,key) in dishList" :key="key"
                        v-tap="{fn:vuetouch,item,index:key}">
                        {{item.category_name}}
                    </li>
                </ul>
            </div>
            <div class="menu-right">
                <div class="item" v-for="item in currentDishList" :key="item.id" v-tap="{fn:detail,item}">
                    <img :src="item.image_url" alt="">
                    <div class="intro">
                        <h2>{{item.dish_name}}</h2>
                        <div class="comment">{{item.id}}敖德萨多大多啥的方法撒发生法萨芬撒反</div>
                        <div style="width:100%;padding-top: 0.5rem;">
                            <span class="price">￥110</span>
                            <div class="add" v-if="item.num === 0" v-tap="{fn:addOne,item}">加入订单</div>
                            <number-picker v-else style="width:60%;float:right;" v-model="item.num"></number-picker>
                        </div>
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
                index: 0,
                num: 0,
                banner: require('../../assets/banner.jpg'),
                imgurl: require('../../assets/logo.png'),
                list: [
                    {
                        id: 1,
                        num: 0,
                        name: '大饼鸡蛋'
                    }
                ]
            }
        },
        computed: {
            bannerWidth() {
                return this.list.length * 20 + 'rem'
            },
            carouselList() {
                return this.$store.state.dishList['carousel_image_urls']
            },
            dishList() {
                return this.$store.state.dishList['categories']
            },
            currentDishList() {
                return this.dishList[this.index]['detail']
            }
        },
        methods: {
            vuetouch(params, event) {
                console.log(params, event)
                this.index = params['index']
            },
            addOne(params, event) {
                event.stopPropagation()
                params.item.num = 1
            },
            detail(params, event) {
                this.$router.push({ path: 'DishDetail', query: { id: params.item['id'] } })
            }
        },
        mounted() {
            console.log(this.dishList)
        }
    }
</script>

<style lang="scss" scoped>
    .dish {
        width: 100%;
        height: 100%;
        .mint-header {
            width: 100%;
        }
        .banner {
            width: 100%;
            padding: 0.5rem 0;
            /*overflow-x: scroll;*/
            ul {
                height: 14rem;
                li {
                    width: 18rem;
                    height: 12rem;
                    padding: 1rem;
                    float: left;
                    .item {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border-radius: 0.5rem;
                        box-shadow: 0 3px 3px #dcdcdc;
                        overflow: hidden;
                        img {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                        }
                        h3 {
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 3rem;
                            line-height: 3rem;
                            font-size: 12px;
                            background-color: rgba(255, 255, 255, 0.9);
                            span:nth-of-type(1) {
                                margin-left: 1rem;
                                float: left;
                            }
                            span:nth-of-type(2) {
                                color: red;
                                margin-right: 1rem;
                                float: right;
                            }
                        }
                    }
                }
            }
        }
        .menu {
            height: calc(100% - 19rem);
            border-top: 1px solid #ececec;
            display: flex;
            .menu-left {
                width: 7.5rem;
                height: 100%;
                background-color: #efefef;
                ul {
                    li {
                        padding: 1.4rem 0;
                        font-size: 12px;
                        text-align: center;
                    }
                    li.active {
                        background-color: white;
                    }
                }
            }
            .menu-right {
                width: 24.5rem;
                height: 100%;
                overflow-y: scroll;
                .item {
                    width: 22.5rem;
                    height: 10rem;
                    margin: 1rem auto;
                    display: flex;
                    img {
                        width: 9rem;
                    }
                    .intro {
                        width: 13rem;
                        padding-left: 0.5rem;
                        flex-direction: column;
                        align-items: center;
                        display: flex;
                        h2 {
                            width: 100%;
                            margin: 0.5rem auto;
                        }
                        .comment {
                            width: 100%;
                            line-height: 1.5;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden
                        }
                        .price {
                            padding: 0.3rem 0.5rem;
                            color: red;
                            font-size: 14px;
                            font-weight: bold;
                            display: inline-block;
                            float: left;
                        }
                        .add {
                            padding: 0.3rem 1rem;
                            border-radius: 1000px;
                            background-color: #FFB311;
                            float: right;
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
