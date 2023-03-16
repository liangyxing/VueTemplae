import { createApp } from 'vue'
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import router from '../src/Router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const store = createPinia()


createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
.mount('#app')
