import {combineReducers} from "redux"
import color from "./modules/color";
import count from "./modules/count"
import changeColor from "./modules/changeColor"
import todos from "./modules/todos"

export default combineReducers({
    color,
    count,
    changeColor,
    todos
})