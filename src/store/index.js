import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // showDish: false,
        // showSet: false,
        // showOrder: false,
        // shopIntro: {},
        // dishList: [],
        // setList: [],
        // currentDish: {},
        // currentSet: {},
        // selectedDish: [],
        // selectedSet: [],
        about: {},
        dishList: {
            'carousel_image_urls': ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549106313768&di=ff32292b9f5a5de70695da775de3d735&imgtype=0&src=http%3A%2F%2Fpic161.nipic.com%2Ffile%2F20180419%2F10673188_115808836000_2.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549106313768&di=ff32292b9f5a5de70695da775de3d735&imgtype=0&src=http%3A%2F%2Fpic161.nipic.com%2Ffile%2F20180419%2F10673188_115808836000_2.jpg'],
            'categories': [
                {
                    'category_id': '1',
                    'category_name': '主食',
                    'detail': [
                        {
                            'image_url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549106313768&di=ff32292b9f5a5de70695da775de3d735&imgtype=0&src=http%3A%2F%2Fpic161.nipic.com%2Ffile%2F20180419%2F10673188_115808836000_2.jpg',
                            'dish_name': '寿司',
                            'price': '110',
                            'id': '1'
                        }
                    ]
                },
                {
                    'category_id': '1',
                    'category_name': '主食',
                    'detail': [
                        {
                            'image_url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549106313768&di=ff32292b9f5a5de70695da775de3d735&imgtype=0&src=http%3A%2F%2Fpic161.nipic.com%2Ffile%2F20180419%2F10673188_115808836000_2.jpg',
                            'dish_name': '寿司',
                            'price': '110',
                            'id': '1'
                        }
                    ]
                },
                {
                    'category_id': '1',
                    'category_name': '主食',
                    'detail': [
                        {
                            'image_url': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549106313768&di=ff32292b9f5a5de70695da775de3d735&imgtype=0&src=http%3A%2F%2Fpic161.nipic.com%2Ffile%2F20180419%2F10673188_115808836000_2.jpg',
                            'dish_name': '寿司',
                            'price': '110',
                            'id': '1'
                        }
                    ]
                }
            ]
        }
    },
    mutations: {
        // showDish(state, message) {
        //     state.showDish = message
        // },
        // showSet(state, message) {
        //     state.showSet = message
        // },
        // showOrder(state, message) {
        //     state.showOrder = message
        // },
        // shopIntro(state, message) {
        //     state.shopIntro = message
        // },
        // dishList(state, message) {
        //     state.dishList = message
        // },
        // setList(state, message) {
        //     state.setList = message
        // },
        // currentDish(state, message) {
        //     state.currentDish = message
        // },
        // currentSet(state, message) {
        //     state.currentSet = message
        // },
        // selectedDish(state, message) {
        //     state.selectedDish.push(message)
        // },
        // selectedSet(state, message) {
        //     state.selectedSet.push(message)
        // },
        // delDish(state, index) {
        //     state.selectedDish.splice(index, 1)
        // },
        // delSet(state, index) {
        //     state.selectedSet.splice(index, 1)
        // },
        // clearAll(state) {
        //     state.selectedDish = []
        //     state.selectedSet = []
        // },
        setAbout(state, message) {
            state.about = message
        }
        ,
        setDishList(state, message) {

        }
        ,
        setThemeColor(state, message) {
            state.themeColor = message
        }
    }
})
