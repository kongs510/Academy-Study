import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext()
const CountProvier = (props) => {
    //실제 데이터 관리, 행동 
    const [ cnt , setCnt ] = useState(0)

    const increment = ()  => {
        setCnt( cnt  + 1 )
    }
    const decrement = ()  => {
        setCnt( cnt - 1 )
    }

    return (
        <CountContext.Provider value={{cnt, increment, decrement}}>
            { props.children }
        </CountContext.Provider>
    );
};

export default CountProvier;

export const useCount = ()  => {
    const {cnt, increment, decrement} = useContext(CountContext)
    return {cnt, increment, decrement}
}