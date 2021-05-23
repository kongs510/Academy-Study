//액션생성
const CHANG_COLOR ="changeColor/CHANG_COLOR"

//액션 내보내기
export const changeColor = (color) =>({type:CHANG_COLOR,color})


//초기값
const initialState = {
    color:"orange"
}

const reducer = (state =initialState, action)=>{
    switch(action.type){
        case CHANG_COLOR:
            return{
                color: action.color
            }
        default:
            return state
    }
}
export default reducer