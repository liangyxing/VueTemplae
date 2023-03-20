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
import home from '../components/home.vue'
import a from '../components/a.vue'
import b from '../components/b.vue'
import login from '../components/login.vue'
import {useAuthStore} from"../Store/useAuthStore"
const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     component:login,
    //     children:[
    //         {
    //         path:"/mainPage"
    //         ,component:mainPage
    //         ,children:[
    //                         {
    //             path: '/mainPage/a',
    //             name: 'a',
    //             component: a,
    //         },
    //         {
    //             path: '/mainPage/b',
    //             name: 'b',
    //             component: b,
    //         },
    //         {
    //             path: '/mainPage/home',
    //             name: 'home',
    //             component: home,
    //         },
    //         ],
    //     }]



    // },
    {
        path: '/login',
        component: login,
    },
    {
        path: '/',
        redirect:"/mainPage"
    },
    {
        
        
        path:"/mainPage",
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
            {
                path: '/mainPage/home',
                name: 'home',
                component: home,
            },
        ],
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

// let authStore=useAuthStore()
// 添加全局前置守卫
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    if (to.path !== '/login' && !isAuthenticated) {
        next('/login')
    } 
    else {
        next()
    }
})



//导出router
export default router