<template>
    <div id="app">
        <s-header></s-header>
        <s-main></s-main>
        <s-footer></s-footer>
        <!--<router-view/>-->
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
        data () {
            return {}
        }
    }
</script>

<style>
    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
