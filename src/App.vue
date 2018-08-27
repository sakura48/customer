<template>
    <div id="app">
        <s-header></s-header>
        <s-main></s-main>
        <s-footer></s-footer>
        <!--<router-view/>-->
        <modal :visible="showDish">
            <dish-detail v-show="showDish"></dish-detail>
        </modal>
        <modal :visible="showSet">
            <set-detail v-show="showSet"></set-detail>
        </modal>
    </div>
</template>

<script>
    import sFooter from './components/footer/sFooter'
    import sHeader from './components/header/sHeader'
    import sMain from './components/main/sMain'
    import modal from './components/common/modal'
    import dishDetail from './components/common/dishDetail'
    import setDetail from './components/common/setDetail'

    export default {
        name: 'App',
        components: {
            sFooter,
            sHeader,
            sMain,
            modal,
            dishDetail,
            setDetail
        },
        data() {
            return {}
        },
        computed: {
            showDish() {
                return this.$store.state.showDish
            },
            showSet() {
                return this.$store.state.showSet
            }
        },
        methods: {
            getShopIntro() {
                let time = new Date().getTime().toString()
                this.$ajax.get(`/web/shop/get?id=1&t=${time}`, this).then((res) => {
                    this.$store.commit('dishList', res)
                }).catch((err) => {
                    this.$message.error(err)
                })
            },
            getDishList() {
                let time = new Date().getTime().toString()
                this.$ajax.get(`/web/dish/all?shop_id=1&t=${time}`, this).then((res) => {
                    this.$store.commit('dishList', res)
                }).catch((err) => {
                    this.$message.error(err)
                })
            },
            getSetList() {
                let time = new Date().getTime().toString()
                this.$ajax.get(`/web/set/all?shop_id=1&t=${time}`, this).then((res) => {
                    this.$store.commit('setList', res)
                }).catch((err) => {
                    this.$message.error(err)
                })
            }
        },
        mounted() {
            this.getDishList()
            this.getSetList()
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
</style>
