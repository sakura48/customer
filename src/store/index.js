import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mask: false
    },
    mutations: {
        showMask(state, message) {
            state.mask = message
        }
    }
})
