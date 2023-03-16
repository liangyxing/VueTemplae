import { createApp } from 'vue'
import {createPinia} from 'pinia'

import './style.css'
import App from './App.vue'
import router from '../src/Router'

const store = createPinia()


createApp(App)
.use(store)
.use(router)
.mount('#app')
