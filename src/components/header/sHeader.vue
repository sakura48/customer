<template>
    <div class="header">
        <img class="logo" :src="getShopIntro.image_url" alt="">
    </div>
</template>

<script>
    export default {
        name: 'sHeader',
        data(){
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
        .logo{
            position: absolute;
            top: 10px;
            left: 10px;
            width:100px;
            height:100px;
            box-shadow: 0 2px 5px #999;
        }
    }
</style>
