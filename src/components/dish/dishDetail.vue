<template>
    <div class="dishDetail">
        <mt-header title="菜品详情" style="font-size: 20px;height:4rem;">
            <router-link to="/dish" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <img :src="imgurl" alt="">
            <h1>大饼鸡蛋</h1>
            <div class="detail">热污染翁热污染无无若无dadadadaddaddas若无若翁无若无若无若</div>
        </div>
        <div class="add" v-tap="add">添加到订单</div>
    </div>
</template>

<script>
    export default {
        name: 'dishDetail',
        data() {
            return {
                imgurl: require('../../assets/banner.jpg')
            }
        },
        methods: {
            // 添加到订单
            add(s, e) {

            }
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
            h1{
                margin: 1rem 0;
            }
            .detail{
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
