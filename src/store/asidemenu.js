import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useasidemenuStore = defineStore('asidemenu', () => {
    let asidemenudata = ref({})
    let setaside = (e) => {
        asidemenudata.value = e
    }
    return {
        asidemenudata,
        setaside
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage,
            paths: ['asidemenudata'], //指定要长久化的字段
        }]

    }
});