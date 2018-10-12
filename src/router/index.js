import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dish from '@/components/dish/dish'

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
                    component: Dish
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
        }
    ]
})
