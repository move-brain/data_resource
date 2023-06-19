import axios from "axios";
import { ElMessage } from 'element-plus'
/** 创建请求实例 */
function createService() {
    const service = axios.create();
    service.defaults.baseURL = '/api';
    // service.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // service.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    service.defaults.timeout = 4000;
    // 请求拦截
    service.interceptors.request.use((config) => {
            config.data = JSON.stringify(config.data);
            return config
        },
        // 发送失败
        (error) => Promise.reject(error));
    // 响应拦截
    service.interceptors.response.use((response) => {
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

export default createService();