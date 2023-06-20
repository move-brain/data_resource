import { defineStore } from 'pinia';
import { ref } from 'vue'
import { userlogin } from '../api/login/request'
export const useuserinfoStore = defineStore('userinfo', () => {
        let userinfo = ref({
            username: '',
            password: '',
            isautologin: false
        })
        let Userlogin = (form) => {
            return new Promise((resolve, reject) => {
                // userlogin(form).then((res) => {
                //     //成功的话   就
                userinfo.value = form
                resolve()
                    // }).catch((err) => {
                    //     reject(err)
                    // })
            })

        }
        return {
            Userlogin,
            userinfo
        }

    }
    // , {
    //     persist: {
    //         enabled: true,
    //         strategies: [{
    //             storage: localStorage,
    //             // paths: [''], //指定要长久化的字段
    //         }]

    //     }
    // }
);