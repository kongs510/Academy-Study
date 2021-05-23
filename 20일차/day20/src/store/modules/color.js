//액션 생성->내보내기

//액션 생성
const PINK = "color/PINK" //액션명 중복방지를 위해 파일명을 앞에 붙힌다.
const TOMATO = "color/TOMATO" //액션명 중복방지를 위해 파일명을 앞에 붙힌다.
const YELLOW = "color/YELLOW" //액션명 중복방지를 위해 파일명을 앞에 붙힌다.
const SKYBLUE = "color/SKYBLUE" //액션명 중복방지를 위해 파일명을 앞에 붙힌다.


//액션 내보내기
export const pink =()=> ({type:PINK}) //함수생성
export const tomato =()=> ({type:TOMATO}) //함수생성
export const yellow =()=> ({type:YELLOW}) //함수생성
export const skyblue =()=> ({type:SKYBLUE}) //함수생성
// dispatch({type:PINK}) =>dispatch(pink())



//순수함수  (컴포넌트 아님)
const initialState = {color:"orange"}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case PINK:
            return{
                color:"pink"
            }
        case TOMATO:
            return{
                color:"tomato"
            }
        case YELLOW:
            return{
                color:"yellow"
            }
        case SKYBLUE:
            return{
                color:"skyblue"
            }
        default:
            return state

    }
}
export default reducer