import { defineStore } from 'pinia';
import { ref } from 'vue'
export const usedatafieldStore = defineStore('datafield', () => {
    let fielddata = ref({})
    let setdatafield = async(e) => {
        fielddata.value = e
        return
    }
    return {
        fielddata,
        setdatafield
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage,
            paths: ['fielddata'], //指定要长久化的字段
        }]

    }
});