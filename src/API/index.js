import axios from 'axios';
import Qs from 'qs';

//axios.defaults.baseURL = "/img/";
axios.defaults.withCredentials = true;//=>允许跨域(并且允许携带COOKIE,并且服务器端不能写*)
axios.interceptors.response.use(result => result.data)
axios.defaults.baseURL = "http://47.115.124.102:8888/api/private/v1/"
//axios.interceptors.response.use(result => result.data);//=>响应拦截器:把服务返回的信息中响应主体内容拦截返回，以后在THEN中获取的结果就是主体内容
//console.log(axios)
export default axios;