import * as TYPES from "../action-types"

let INIT_STATE ={
   daoHang:[]
}

export default function about(state=INIT_STATE,action){
           state = JSON.parse(JSON.stringify(state))

           switch(action.type){
              case TYPES.TOP_BAR_DAO:
             state.daoHang = action.result
            break
           }
           return state
}