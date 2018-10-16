// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import http from './api'
import VueTouch from './directive/touch'

Vue.use(MintUI)

// 添加移动端事件
let arr = ['tap', 'swipe', 'swipeleft', 'swiperight', 'swipedown', 'swipeup', 'longtap']
arr.forEach((val) => {
    Vue.directive(val, {
        bind(el, binding, vnode) {
            vnode.key = Math.ceil(Math.random() * 1000000)
            new VueTouch(el, binding, val)
        }
    })
})

Vue.config.productionTip = false
Vue.prototype.$ajax = http
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
