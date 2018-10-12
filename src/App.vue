<template>
    <div id="app">
        <!--<div class="main">-->
        <router-view></router-view>
        <!--</div>-->
        <!--<div class="tabBar">-->
        <!--<ul>-->
        <!--<router-link tag="li" to="/dish">-->
        <!--点菜-->
        <!--</router-link>-->
        <!--<router-link tag="li" to="/order">-->
        <!--订单-->
        <!--</router-link>-->
        <!--<router-link tag="li" to="/shop">-->
        <!--商家-->
        <!--</router-link>-->
        <!--</ul>-->
        <!--</div>-->
    </div>
</template>

<script>

    export default {
        name: 'App',
        mounted() {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 32 + 'px'
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100%;
        color: #333;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    li{
        list-style: none;
    }
</style>
