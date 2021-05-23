
//액션 생성
const INCREMENT ="count/INCREMENT"
const DECREMENT ="count/DECREMENT"

//액션 내보내기
export const increment = () =>({type:INCREMENT})
export const decrement = () =>({type:DECREMENT})

//초기값
const initialstate={cnt:0}

//함수
const reducer = (state=initialstate,action) =>{
    switch (action.type) {
        case INCREMENT:       
            return{
                cnt:state.cnt+1  
            }
        case DECREMENT:    
            return{
                cnt:state.cnt-1  
            }
        default:
            return state
    }
}


export default reducer