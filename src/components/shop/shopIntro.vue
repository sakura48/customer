<template>
    <div class="shopIntro">
        <mt-header title="商家" style="font-size: 20px;height:4rem;"
                   :style="{backgroundColor:$store.state.themeColor}"></mt-header>
        <div class="main">
            <img class="banner" :src="getShopIntro.image_url" alt="">
            <div class="detail">
                <h2>{{getShopIntro.name}}</h2>
                <div style="font-size: 12px;color:#888888;">
                    {{getShopIntro.description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'shopIntro',
        computed: {
            getShopIntro() {
                return this.$store.state.about
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shopIntro {
        height: 100%;
        .main {
            width: 100%;
            height: calc(100% - 4rem);
            .banner {
                width: 100%;
                height: 16rem;
            }
            .detail {
                width: calc(100% - 2rem);
                padding: 0 1rem;
                h2 {
                    margin: 1rem 0;
                }
            }
        }
    }

</style>
