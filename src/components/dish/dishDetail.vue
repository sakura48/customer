<template>
    <div class="dishDetail">
        <mt-header title="菜品详情" style="font-size: 20px;height:4rem;" :style="{backgroundColor:$store.state.themeColor}">
            <router-link to="/dish" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <img :src="dish.image_url" alt="">
            <h1>{{dish.name}}</h1>
            <div class="detail">{{dish.description}}</div>
            <p style="color:red">￥{{dish.price}}</p>
        </div>
        <!--<div class="add" v-tap="add">添加到订单</div>-->
    </div>
</template>

<script>
    export default {
        name: 'dishDetail',
        data() {
            return {
                dish: {},
                imgurl: require('../../assets/banner.jpg')
            }
        },
        methods: {
            // 添加到订单
            search(id) {
                this.$ajax.get(`/mobile/dish/detail?dish_id=${id}`).then((res) => {
                    this.dish = res
                })
            }
        },
        mounted() {
            this.search(this.$route.query.id)
        }
    }
</script>

<style lang="scss" scoped>
    .dishDetail {
        width: 100%;
        height: 100%;
        .main {
            width: calc(100% - 2rem);
            height: calc(100% - 10rem);
            padding: 1rem;
            overflow: scroll;
            img {
                width: 30rem;
                height: 18rem;
                margin: 0 auto;
                border-radius: 0.4rem;
                display: block;
            }
            h1 {
                margin: 1rem 0;
            }
            .detail {
                color: #888888;
                font-size: 12px;
            }
        }
        .add {
            width: 100%;
            height: 4rem;
            text-align: center;
            line-height: 4rem;
            font-size: 20px;
            color: white;
            background-color: #26a2ff;
        }
    }
</style>
