
import about from "./about"
import person from  "./person"

import {combineReducers} from "redux"
let reducer = combineReducers({
    about,
    person
})
export default reducer