import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showDish: false,
        showSet: false,
        showOrder: false,
        shopIntro: {
            cn_name: 'akb咖啡厅',
            cn_description: 'wwwwwwww',
            image_url: 'http://img4.imgtn.bdimg.com/it/u=2410195744,4042000846&fm=15&gp=0.jpg'
        },
        dishList: [
            {
                id: '1',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                cn_materials: ['材料1', '材料2'],
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/line.png'
            },
            {
                id: '2',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/gp.png'
            },
            {
                id: '3',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/tw.png'
            },
            {
                id: '3',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/tw.png'
            },
            {
                id: '3',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/tw.png'
            },
            {
                id: '3',
                cn_name: 'VUE单品',
                cn_description: '单品描述',
                code: '000xxx1',
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/tw.png'
            }
        ],
        setList: [
            {
                id: '1',
                cn_name: 'VUE套餐',
                cn_description: '套餐描述',
                code: '000xxx1',
                tags: ['西红柿', '鸡蛋'],
                dishes: ['单品1id', '单品2id'],
                image_url: 'https://www.falcom.co.jp/sen4/assets/common/share/tw.png'
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
        }
    }
})
