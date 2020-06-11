// 操作local数据的工具模块
//
//
//这里发现一个问题，我必须先导入在定义const，不然会报错，针对这个插件来说
import store from "store"
const USER_KEY ="user"
export default {
    saveUser(user){
   // localStorage.setItem(USER_KEY,JSON.stringify(user))
   store.set(USER_KEY,user)
    },
    getUser(){
       // return   JSON.parse(localStorage.getItem(USER_KEY)||"{}")
       return store.get(USER_KEY)
    },
    removeUser(){
       // localStorage.remove(USER_KEY)
       store.remove(USER_KEY)
    }
}