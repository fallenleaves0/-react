import {createStore,applyMiddleware} from "redux"
import reducer from "./reducer"  //不写index默认也会找
import reduxLogger from "redux-logger"
import reduxThunk from "redux-thunk"

let store = createStore(reducer
    ,applyMiddleware(
        reduxLogger,reduxThunk
    ))
export default store
