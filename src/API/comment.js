import axios from "./index"
import jsonp from "jsonp"
export function getDaoHang(conImg){
   
  
    return axios.get("http://mock.shtodream.cn/mock/5ed11a939a69db61e52e8789/example/daohang")
    
    }
export function LoginP(user,pass){
   
    return axios.post('login?username=admin&password=123456',{
       username:user,
       password:pass
    })
}
// export const reqWeather=(city)=>{
//     return new Promise((resolve,reject)=>{ //执行器，成功了调用resolve，失败了不调用reject（直接提示错误信息）
//         const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9sBUBWr2`
//         jsonp(url,{},(error,data)=>{
//                if(!error&&data.error===0){//成功的
//               const {dayPictureUrl,weather} = data.result[0].weather_data[0]
//               resolve({dayPictureUrl,weather})
//                }else{
//                    message.error("获取失败")
//                }
//         })
//     })
    
// }
export const getList=()=>{
     return axios.get("categories")
}

export const reqAddCategory=(cat_name)=>{
    return axios.post("categories",{
        cat_pid:0,
        cat_level:0,
        cat_name
    })
}
export const reqUpdataCategory=(id,cat_name)=>{
    return axios.put(`categories/${id}`,{cat_name})
}
export const reqProducts=(pagenum,pagesize)=>axios("goods",{
    params:{//包含所有query配置的对象
        pagenum,
        pagesize
    }
})