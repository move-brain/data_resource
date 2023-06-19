import request from '../../axios'
export const userlogin = () => {
    return request({
        url: '/catalogue/login',
        method: 'get',
    })
}