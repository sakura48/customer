import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showDish: false,
        showSet: false,
        showOrder: false,
        shopIntro: {},
        dishList: [],
        setList: [],
        currentDish: {},
        currentSet: {},
        selectedDish: [],
        selectedSet: []
    },
    mutations: {
        showDish(state, message) {
            state.showDish = message
        },
        showSet(state, message) {
            state.showSet = message
        },
        showOrder(state, message) {
            state.showOrder = message
        },
        shopIntro(state, message) {
            state.shopIntro = message
        },
        dishList(state, message) {
            state.dishList = message
        },
        setList(state, message) {
            state.setList = message
        },
        currentDish(state, message) {
            state.currentDish = message
        },
        currentSet(state, message) {
            state.currentSet = message
        },
        selectedDish(state, message) {
            state.selectedDish.push(message)
        },
        selectedSet(state, message) {
            state.selectedSet.push(message)
        },
        delDish(state, index) {
            state.selectedDish.splice(index, 1)
        },
        delSet(state, index) {
            state.selectedSet.splice(index, 1)
        },
        clearAll(state) {
            state.selectedDish = []
            state.selectedSet = []
        }
    }
})
