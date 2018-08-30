<template>
    <div class="header">
        <img class="logo" :src="getShopIntro.image_url" align="center" alt="">
        <span class="text" style="">{{getShopIntro.cn_name}}</span>
    </div>
</template>

<script>
    export default {
        name: 'sHeader',
        data() {
            return {}
        },
        computed: {
            getShopIntro() {
                return this.$store.state.shopIntro
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        position: relative;
        height: 100px;
        background-color: #ffb311;
        .logo {
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 15px;
            width: 100px;
            height: 100px;
            border-radius: 4px;
            box-shadow: 0 2px 5px #999;
        }
        .text{
            letter-spacing:2px;
            text-shadow: #ff6c3c 0 0 20px;
            font-weight: bold;
            font-size: 20px;color:white;
        }
    }
</style>
