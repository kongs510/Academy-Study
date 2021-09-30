import React, { useReducer } from 'react';
const initialstate ={width:100}
const box=(state,action)=>{
    switch(action.type){
        case"PLUS":
        return{
            width:state.width+action.step
        }
        case"MINUS":
        return{
            width:state.width-action.step
        }
        case "RESET":
            return{
                width:100
            }
        default:
            return state
    }
}
const Test9 = () => {
    const[state,dispatch]=useReducer(box,initialstate)
    return (
        <>
        <div style={{background:"tomato", width:state.width, height:100,marginLeft:10,transition:"0.4s"}} 
        >
            
        </div>
        <p>
            <button onClick={()=>dispatch({type:"PLUS",step:50})}>증가</button>
            <button onClick={()=>dispatch({type:"MINUS",step:50})}>감소</button>
            <button onClick={()=>dispatch({type:"RESET"})}>초기화</button>
        </p>
        </>
    );
};

export default Test9;