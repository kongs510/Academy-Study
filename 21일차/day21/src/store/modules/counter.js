const INCREMENT = "count/INCREMENT"
const DECREMENT = "count/DECREMENT"

export const increment = () =>({type:INCREMENT})
export const decrement = () =>({type:DECREMENT})

//비동기함수
export const incrementAsync = () => dispatch =>{
    setTimeout(()=> dispatch (increment()),3000)
}
export const decrementAsync = () => dispatch =>{
    setTimeout(()=> dispatch (decrement()),3000)
}

const initialState={
    cnt:0
}

const reducer =(state = initialState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {cnt: state.cnt +1}
        case DECREMENT:
            return {cnt: state.cnt -1}
        
    
        default:
            return state
    }
}
export default reducer