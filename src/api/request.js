//get方法可以使用params传参   post可以使用post和params
// import { id } from 'element-plus/es/locale';
import request from '../axios'
export let loginsign = (logindata) => {
    //这里可以进行一些进行一些登录发起前的行为
    console.log(request);
    return request({
        url: '/user/login',
        method: 'get',
        // params: { randomStr, code, grant_type, scope },
        params: logindata
    })
}
export const gettest = () => {
    return request({
        url: '/catalogue/top',
        method: 'get',
    })
}
export const getchtest = (id) => {
    return request({
        url: '/catalogue/childrenCatalogue/',
        method: 'get',
        params: { id }
    })
}

// export const getparentCatalogue = (id) => {
//     return request({
//         url: '/catalogue/parentCatalogue',
//         params: { id },
//         method: 'get',
//     })
// }
export const getcascadeParentCatalogue = (id) => {
    return request({
        url: '/catalogue/cascadeParentCatalogue',
        method: 'get',
        params: { id }
    })
}
export const getfindAllCatalogueByRootId = (id) => {
        return request({
            url: '/catalogue/findAllCatalogueByRootId',
            method: 'get',
            params: { id }
        })
    }
    // export const gettest = () => {
    //     return request({
    //         url: '/user/login',
    //         method: 'post'
    //     })
    // }
    // export const getchtest = () => {
    //     return request({
    //         url: '/user/chtest',
    //         method: 'post'
    //     })
    // }
export const getoverview = (id) => {
    return request({
        url: '/catalogue/catalogue/overview',
        method: 'get',
        params: { id }
    })
}
export const getfather = (id) => {
    return request({
        url: 'catalogue/parentCatalogue/',
        method: 'get',
        params: { id }
    })
}
export const getdatafield = (id) => {
    return request({
        url: '/catalogue/field/overview',
        method: 'get',
        params: { id }
    })
}
export const getallparent = (id) => {
    return request({
        url: '/catalogue/cascadeParentCatalogue',
        method: 'get',
        params: { id }
    })
}