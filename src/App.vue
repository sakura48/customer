<template>
    <div id="app">
        <s-header></s-header>
        <s-main></s-main>
        <s-footer></s-footer>
        <!--<router-view/>-->
        <transition name="fade">
            <div class="mask" v-show="mask"></div>
        </transition>
    </div>
</template>

<script>
    import sFooter from './components/footer/sFooter'
    import sHeader from './components/header/sHeader'
    import sMain from './components/main/sMain'

    export default {
        name: 'App',
        components: {
            sFooter,
            sHeader,
            sMain
        },
        data() {
            return {}
        },
        computed: {
            mask() {
                return this.$store.state.mask
            }
        },
        mounted() {
            console.log(parseInt('1231fsf'))
        }
    }
</script>

<style lang="scss">
    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.4s;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
