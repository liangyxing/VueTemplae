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
import a from '../components/a.vue'
import b from '../components/b.vue'
const routes:Array<RouteRecordRaw>=[
    {
        path: '/',
        component: mainPage,
        children: [
            {
                path: '/a',
                name: 'a',
                component: a,
            },
            {
                path: '/b',
                name: 'b',
                component: b,
            },
        ],
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router