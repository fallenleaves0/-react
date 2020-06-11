import axios from "./index"
export function getDaoHang(conImg){
   
  
    return axios.get("http://mock.shtodream.cn/mock/5ed11a939a69db61e52e8789/example/daohang")
    
    }
export function LoginP(user,pass){
   
    return axios.post('login?username=admin&password=123456',{
       username:user,
       password:pass
    })
}
