import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { Routerslist } from '@/config/router/index.js'
const routes = [...Routerslist]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router