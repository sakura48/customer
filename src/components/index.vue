<template>
    <div class="index">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="tabBar">
            <ul>
                <router-link tag="li" to="/dish">
                    <div class="icon icon_dish"></div>
                    <span>点菜</span>
                </router-link>
                <router-link tag="li" to="/order">
                    <div class="icon icon_order"></div>
                    <span>订单</span>
                </router-link>
                <router-link tag="li" to="/shop">
                    <div class="icon icon_shop"></div>
                    <span>商家</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld'
    }
</script>

<style lang="scss" scoped>
    .index {
        width: 100%;
        height: 100%;
        display: flex;
        .main {
            width: 100%;
            height: calc(100% - 4.9rem);
        }
        .tabBar {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 4.9rem;
            box-shadow: 0 2px 15px #efefef;
            ul {
                height: 100%;
                display: flex;
                li {
                    font-size: 14px;
                    text-align: center;
                    list-style: none;
                    height: 100%;
                    flex: 1;
                    .icon {
                        width: 3rem;
                        height: 3rem;
                        margin: 0 auto;
                        background: center center no-repeat;
                        background-size: 100% 100%;
                    }
                    .icon_order {
                        background-image: url("../assets/order.png");
                    }
                    .icon_dish {
                        background-image: url("../assets/dish.png");
                    }
                    .icon_shop {
                        background-image: url("../assets/shop.png");
                    }
                }
            }
        }
    }
</style>
