import React, { useReducer } from 'react';


const initialsate=0

const reducer = (state,action) =>{
    switch (action.type) {
        case "INCREMENT":
            return state +1
        case "DECREMENT":
            return state-1
        case "RESET":
            return 0
        default:
            return state
    }
}
//증가:INCREMENT ,DECREMENT,RESET
const Test7 = () => {
    const [count,dispatch]=useReducer(reducer,initialsate)
    return (
        <div>
            <h1>숫자:{count}</h1>
            <p>
                <button onClick={()=> dispatch({type:"INCREMENT"})}>증가</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>감소</button>
                <button onClick={()=>dispatch({type:"RESET"})}>초기화</button>
            </p>
        </div>
    );
};

export default Test7;
/*
const [state, dispatch] = useReducer(reducer, 사용자함수, 초기값);

state : 상태값
dispatch : 액션을 발생하는 함수
사용자함수 : 사용자분기함수 (action.type)
        (state,action)

        const 사용자함수명=(state,action) =>{
            switch(action.type){
                case '액션상수명':
                    return 값
                default :
                    return state
            }
        }
        dispatch({type:"액션상수명"})
        type은 필수 액션타입 action.type
        dispatch({type:"액션상수명", 키:값})
        action.키

        액션상수명: 한글,영문자소문자,영문자대문자


*/