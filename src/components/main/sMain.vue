<template>
    <div class="main">
        <mt-navbar v-model="active">
            <mt-tab-item id="1">店铺</mt-tab-item>
            <mt-tab-item id="2">菜单</mt-tab-item>
            <mt-tab-item id="3">评价</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        name: 'sMain',
        data () {
            return {
                active: '1'
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .main {
        height: calc(100% - 110px)
    }
    .mint-tab-item-label{
        font-size: 14px;
    }
</style>
