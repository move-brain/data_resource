import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useDirectoryinfoStore = defineStore('Directoryinfo', () => {
    let info = ref({})
    let setinfo = async(e) => {
        info.value = e
        return
    }
    let getinfo = () => {
        return info.value
    }
    return {
        info,
        setinfo,
        getinfo
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage,
            paths: ['info'], //指定要长久化的字段
        }]

    }
});