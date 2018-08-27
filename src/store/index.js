import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showDish: false,
        showSet: false,
        shopIntro: {},
        dishList: [],
        setList: [
            {
                id: '1',
                name: 'VUE套餐',
                code: '000xxx1',
                tags: ['西红柿', '鸡蛋'],
                dishes: ['单品1id', '单品2id'],
                image_urls: ['url1', 'url2']
            }
        ],
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
            state.selectedSet = message
        }
    }
})
