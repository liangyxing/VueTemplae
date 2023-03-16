//引入路由对象
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
// const routes: Array<RouteRecordRaw> = [
//     {
//     path: '/',
//     component: () => import('../Views/MainPage/index.vue')
// }, {
//     path: '/register',
//     component: () => import('../components/b.vue')
// }
// ]
import mainPage from '../Views/MainPage/index.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path: '/',
        component: mainPage,
        // children: [
        //     {
        //         // path: '/mainPage/home',
        //         // name: 'home',
        //         // component: home,
        //     },
        //     {
        //         // path: '/mainPage/CustomerInfo',
        //         // name: '客户信息',
        //         // component: CustomerInfo,
        //     },
        // ],
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router