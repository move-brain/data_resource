//get方法可以使用params传参   post可以使用post和params
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