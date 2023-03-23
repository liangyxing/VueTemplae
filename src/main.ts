import { createApp } from 'vue'
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import router from '../src/Router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import mitt from 'mitt'


const Mit = mitt()
const store = createPinia()

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}


const app = createApp(App)

app.config.globalProperties.$Bus = Mit

app.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
