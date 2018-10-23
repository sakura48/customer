import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Dish from '@/components/dish/dish'
import DishDetail from '@/components/dish/dishDetail'
import Order from '@/components/order/order'
import OrderDetail from '@/components/order/orderDetail'
import ShopIntro from '@/components/shop/shopIntro'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            redirect: '/dish',
            children: [
                {
                    path: '/dish',
                    component: Dish,
                    meta: {index: 0}
                },
                {
                    path: '/order',
                    component: Order,
                    meta: {index: 0}
                },
                {
                    path: '/shop',
                    component: ShopIntro
                }
            ]
        },
        {
            path: '/dishDetail',
            component: DishDetail,
            meta: {index: 1}
        },
        {
            path: '/orderDetail',
            component: OrderDetail,
            meta: {index: 1}
        }
    ]
})
