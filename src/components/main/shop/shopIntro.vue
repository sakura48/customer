<template>
    <div class="shopIntro">
        <h3>店铺介绍</h3>
        <div style="margin-top: 15px;">{{getShopIntro.cn_description}}</div>
    </div>
</template>

<script>
    export default {
        name: 'shopIntro',
        computed: {
            getShopIntro() {
                return this.$store.state.shopIntro
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shopIntro{
        padding: 10px;
    }
</style>
