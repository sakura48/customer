<template>
    <div class="main">
        <mt-navbar v-model="active">
            <mt-tab-item id="1">店铺</mt-tab-item>
            <mt-tab-item id="2">菜单</mt-tab-item>
            <mt-tab-item id="3">评价</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="1">
                <shop-intro></shop-intro>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <s-menu></s-menu>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <shop-intro></shop-intro>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import shopIntro from './shop/shopIntro'
    import sMenu from './menu/menu'

    export default {
        name: 'sMain',
        components: {
            shopIntro,
            sMenu
        },
        data() {
            return {
                active: '1'
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    .main {
        height: calc(100% - 150px)
    }
    .mint-navbar{
        border-bottom: 1px solid #efefef;
    }
    .mint-tab-container {
        height: calc(100% - 46px);
        .mint-tab-container-wrap {
            height: 100%;
        }
    }

    .mint-tab-item-label {
        font-size: 14px;
    }
</style>
