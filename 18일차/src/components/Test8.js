import React, { useReducer } from 'react';

const reducer=(state,action)=>{
    switch (action.type){
    case "INCREMENT":
        return state +action.step
    case "DECREMENT":
        return state - action.step
    case "RESET":
        return 0
    default:
        return state
    }
}

const Test8 = () => {
    const [count1,dispatch1]=useReducer(reducer,0)
    const [count2,dispatch2]=useReducer(reducer,100)
    return (
        <div>
            <h1>숫자:{count1}</h1>  
            <button onClick={()=>dispatch1({type:"INCREMENT",step:10})}>증가</button>
            <button onClick={()=>dispatch1({type:"DECREMENT",step:50})}>감소</button>
            <button onClick={()=>dispatch1({type:"RESET"})}>초기화</button>
            <hr/>
            <h1>숫자:{count2}</h1>  
            <button onClick={()=>dispatch1({type:"INCREMENT",step:100})}>증가</button>
            <button onClick={()=>dispatch1({type:"DECREMENT",step:500})}>감소</button>
            <button onClick={()=>dispatch1({type:"RESET"})}>초기화</button>
        </div>
    );
};

export default Test8;