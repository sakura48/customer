<template>
    <div class="orderDetail">
        <mt-header title="订单详情" style="font-size: 20px;height:4rem;" :style="{backgroundColor:$store.state.themeColor}">
            <router-link to="/order" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id="chinese">中文</mt-tab-item>
            <mt-tab-item id="japanese">日文</mt-tab-item>
        </mt-navbar>
        <order-list :lang="selected" :list="list"></order-list>
    </div>
</template>

<script>
    import orderList from './orderList'

    export default {
        name: 'orderDetail',
        components: {
            orderList
        },
        data() {
            return {
                selected: 'chinese',
                list: [
                    {
                        name: 'sss',
                        num: 1
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderDetail {
        width: 100%;
        height: 100%;
        .mint-tab-item-label {
            font-size: 14px;
        }
    }
</style>
<style lang="scss">
    .orderDetail {
        .mint-tab-item-label {
            font-size: 14px;
        }
    }
</style>
