import * as TYPES from "../action-types"
import {getDaoHang} from "../../API/comment"


let about ={
     
    getDaoHang(){
     
        return async dispatch=>{
           let result = await getDaoHang()
  
           dispatch({
               type:TYPES.TOP_BAR_DAO
               ,result
           })
       }
     
  }
      
   
  
}
export default about