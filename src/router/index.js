import { createRouter, createWebHashHistory } from "vue-router"
import { sidebarrouters } from '@/config/Layoutmenu/aside'
const routes = [

    {
        path: '/',
        name: 'layout',
        redirect: '/dataBrowse',
        component: () =>
            import ('../Layout/layout.vue'),
        children: [...sidebarrouters]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router