import axios from "axios";
import { ElMessage } from 'element-plus'
import
/** 创建请求实例 */
function createService() {
    const service = axios.create();
    service.defaults.baseURL = '/api';
    // service.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; //为所有的请求设置请求头
    // service.defaults.headers.post['Access-Control-Allow-Origin'] = '*';   //为post请求设置请求头
    service.defaults.timeout = 4000;
    // 请求拦截
    service.interceptors.request.use((config) => {
            config.data = JSON.stringify(config.data);
            console.log(config);
            return config
        },
        // 发送失败
        (error) => Promise.reject(error));
    // 响应拦截
    service.interceptors.response.use((response) => {
        // apiData 是 API 返回的数据
        return response
    }, (error) => {
        const status = error.status
        switch (status) {
            case 400:
                error.message = "请求错误";
                break;
            case 403:
                error.message = "拒绝访问";
                break;
            case 404:
                error.message = "请求地址出错";
                break;
            case 408:
                error.message = "请求超时";
                break;
            case 500:
                error.message = "服务器内部错误";
                break;
            case 501:
                error.message = "服务未实现";
                break;
            case 502:
                error.message = "网关错误";
                break;
            case 503:
                error.message = "服务不可用";
                break;
            case 504:
                error.message = "网关超时";
                break;
            case 505:
                error.message = "HTTP 版本不受支持";
                break;
            default:
                break;
        }
        ElMessage.error(error.message);
        return Promise.reject(error);
    });
    return service;
}
/** 创建请求方法 */
function createRequestFunction(service) {
    return function(config) {
        return service(config);
    };
}
/** 用于网络请求的实例 */
const service = createService();
/** 用于网络请求的方法 */
export default createRequestFunction(service);
//请求拦截
// axios.interceptors.request.use(config => {
//         console.log(config);
//         config.data = JSON.stringify(config.data); //数据序列化
//         config.headers = {
//             'Content-Type': 'application/json' //配置请求头
//         }
//         return config
//     }, err => {
//         console.log(err);
//         return Promise.reject(err)
//     })
//     //响应拦截

// axios.interceptors.response.use(response => {
//     //接收到响应数据并成功后的一些共有的处理，关闭loading等

//     return response
// }, error => {
//     /***** 接收到异常响应的处理开始 *****/
//     // if (err && err.response) {
//     //     ElMessage({

//     //             message: '您的请求出现问题',
//     //             type: 'error',
//     //         })
//     //         // 1.公共错误处理
//     //         // 2.根据响应码具体处理
//     // } else {
//     //     // 超时处理
//     //     if (JSON.stringify(err).includes('timeout')) {
//     //         ElMessage({

//     //             message: '您的请求超时',
//     //             type: 'error',
//     //         })
//     //     }
//     //     err.message = '连接服务器失败'
//     //     ElMessage({
//     //         message: '连接服务器失败',
//     //         type: 'error',
//     //     })
//     // }
//     switch (error.status) {
//         case 400:
//             error.message = "请求错误";
//             break;
//         case 403:
//             error.message = "拒绝访问";
//             break;
//         case 404:
//             error.message = "请求地址出错";
//             break;
//         case 408:
//             error.message = "请求超时";
//             break;
//         case 500:
//             error.message = "服务器内部错误";
//             break;
//         case 501:
//             error.message = "服务未实现";
//             break;
//         case 502:
//             error.message = "网关错误";
//             break;
//         case 503:
//             error.message = "服务不可用";
//             break;
//         case 504:
//             error.message = "网关超时";
//             break;
//         case 505:
//             error.message = "HTTP 版本不受支持";
//             break;
//         default:
//             break;
//     }
//     console.log(error);
//     return Promise.reject(error)
// })
// export default axios