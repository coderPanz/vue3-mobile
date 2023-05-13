import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"
import "./assets/css/index.css"
import router from './router'
import pinia from './store'
createApp(App).use(router).use(pinia).mount('#app')
