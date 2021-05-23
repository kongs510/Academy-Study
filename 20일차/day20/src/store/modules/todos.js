import { act } from "react-dom/test-utils"

//액션 생성
const INSERT = "todos/INSERT"
const REMOVE = "todos/REMOVE"
const CHANGE_INPUT = "todos/CHANGE_INPUT"
const TOGGLE = "todos/TOGGLE"

//액션내보내기
export const insert = (text)=>({type:INSERT,text})
export const remove = (id)=>({type:REMOVE,id})
export const change_input = (text)=>({type:CHANGE_INPUT,text})
export const toggle = (id)=>({type:TOGGLE,id})

//초기화
let no=4
const initialState={
    text:"",
    todos:[
        {id:1,text:"청소하기",done:"false"},
        {id:2,text:"이불빨기",done:"false"},
        {id:3,text:"등산하기",done:"false"},
    ]
}
//리듀서 생성-순수함수
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case INSERT:
            return{
                ...state,
                todos:[
                    ...state.todos,{id:no++,text:action.text,done:false}
                ]
            }
        case REMOVE:
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id !== action.id )
            }
        case CHANGE_INPUT:
            return{
                ...state,
                text:action.text
            }
        case TOGGLE:
            return{
                ...state,
                todos:state.todos.map(todo=>todo.id === action.id ? 
                    {...todo, done:!todo.done}:todo)
            }
        default:
           return state;
    }
}
export default reducer