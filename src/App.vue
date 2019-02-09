<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {// 使用watch 监听$router的变化
            $route(to, from) {
                // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if (to.meta.index > from.meta.index) {
                    // 设置动画名称
                    this.transitionName = 'slide-left'
                } else {
                    this.transitionName = 'slide-right'
                }
            }
        },
        methods: {
            getAbout() {
                this.$ajax.get('/mobile/about?company_id=xxxx').then((res) => {
                    this.$store.commit('setAbout', res)
                })
            },
            getDishList() {
                this.$ajax.get('/dish/list?company_id=xxxx').then((res) => {
                    this.$store.commit('setDishList', res)
                })
            }
        },
        mounted() {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 32 + 'px'
            this.getAbout()
            this.getDishList()
            // window.addEventListener('message', (messageEvent) => {
            //     var data = messageEvent.data // messageEvent: {source, currentTarget, data}
            //     this.$store.commit('setThemeColor', data.color)
            //     console.info('message from child:', data)
            // }, false)
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

    li {
        list-style: none;
    }

    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all 300ms;
        position: absolute;
    }

    .slide-right-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
