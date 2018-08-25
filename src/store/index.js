import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showDish: false,
        showSet: false
    },
    mutations: {
        showDish(state, message) {
            state.showDish = message
        },
        showSet(state, message) {
            state.showSet = message
        }
    }
})
