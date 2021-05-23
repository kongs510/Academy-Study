import {combineReducers} from "redux"
import counter from "./modules/counter"
import news from "./modules/news"

export default combineReducers({
    counter,
    news
})