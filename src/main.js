import { createApp } from 'vue'
import './style.css'
import './tailwind.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import svgicon from '@/components/svgicon.vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import './assets/iconfont/iconfont.js'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia()
pinia.use(piniaPluginPersist)
app.component('svgicon', svgicon);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')