import React, { useCallback, useState } from 'react';

const Test4 = () => {
    const [count , setCount ] =useState(1)

    const ran  = Math.random() 
    const incrememt  = useCallback( ()  => {
        console.log( ran )
        setCount( count + 1 )
    },[count])
    
    const decrememt  =useCallback( ()  => {
        console.log( ran )
        setCount( count  - 1 )
    } ,[])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrememt}>증가</button>
            <button onClick={decrememt}>감소</button>
        </div>
    );
};

export default Test4;