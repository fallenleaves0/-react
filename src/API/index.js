import axios from 'axios';
import Qs from 'qs';

//axios.defaults.baseURL = "/img/";
axios.defaults.withCredentials = true;//=>允许跨域(并且允许携带COOKIE,并且服务器端不能写*)
//axios.interceptors.response.use(result => result.data)
//axios.defaults.baseURL = "http://47.115.124.102:8888/api/private/v1/"
axios.defaults.baseURL = ""

axios.interceptors.request.use(config=>{
    config.headers.Authorization = window.sessionStorage.getItem("token")
    return config
  })

export default axios;