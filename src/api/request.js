//get方法只可以使用params传参   post可以使用post和params
import request from '../axios'
//获取顶层目录
export const gettest = () => {
        return request({
            url: '/catalogue/top',
            method: 'get',
        })
    }
    //获取子目录
export const getchtest = (id) => {
    return request({
        url: '/catalogue/childrenCatalogue/' + id,
        method: 'get',
    })
}
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
    //查看目录信息
export const getoverview = (id) => {
        return request({
            url: '/catalogue/catalogue/overview',
            method: 'get',
            params: { id }
        })
    }
    //获取父目录
export const getfather = (id) => {
        return request({
            url: 'catalogue/parentCatalogue/',
            method: 'get',
            params: { id }
        })
    }
    //获取数据字段信息
export const getdatafield = (id) => {
        return request({
            url: '/catalogue/field/overview',
            method: 'get',
            params: { id }
        })
    }
    //获取全部上层目录
export const getallparent = (id) => {
    return request({
        url: '/catalogue/cascadeParentCatalogue',
        method: 'get',
        params: { id }
    })
}