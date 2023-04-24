import axios from 'axios'
const service = axios.create()
service.defaults.baseURL = '/api';
// service.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// service.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
service.defaults.timeout = 4000;
export default service