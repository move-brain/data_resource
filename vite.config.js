import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 8083,
        open: true,
        proxy: {
            "/api": {                                   //服务器接口路径地址，根据路径设置
                target: "http://localhost:8080",
                // target: "http://localhost:9999/resources",   //你的服务器地址
                changeOrigin: true, // 允许跨域
                rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径把路径变成空字符，（我理解的意思是：baseURL: '/neimenmenhuan/' 配置了，子接口 url: 'neimenmenhuan/settings/qx/user' 也可以正常访问，但是理解的很粗略，希望得到一个透彻的答案；
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'), // 路径别名
        },
    },
})