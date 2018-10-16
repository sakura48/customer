import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dish from '@/components/dish/dish'
import DishDetail from '@/components/dish/DishDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [
                {
                    path: '/dish',
                    component: Dish,
                    meta: {index: 0}
                },
                {
                    path: '/order',
                    component: HelloWorld
                },
                {
                    path: '/shop',
                    component: HelloWorld
                }
            ]
        },
        {
            path: '/dishDetail',
            component: DishDetail,
            meta: {index: 1}
        }
    ]
})
