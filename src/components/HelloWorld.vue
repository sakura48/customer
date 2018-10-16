<template>
    <div class="index">
        <div class="main">
                <router-view></router-view>
        </div>
        <div class="tabBar">
            <ul>
                <router-link tag="li" to="/dish">
                    点菜
                </router-link>
                <router-link tag="li" to="/order">
                    订单
                </router-link>
                <router-link tag="li" to="/shop">
                    商家
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
            height: calc(100% - 49px);
        }
        .tabBar {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 49px;
            background-color: black;
            ul {
                height: 100%;
                display: flex;
                li {
                    font-size: 14px;
                    text-align: center;
                    color: white;
                    list-style: none;
                    height: 100%;
                    flex: 1;
                }
            }
        }
    }
</style>
