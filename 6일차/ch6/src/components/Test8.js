import React, { useState } from 'react';

const Test8 = () => {
    const [count,setCount] = useState(1)

    const inCrement1 = () => {
        setCount( count +1)
    }
    const deCrement1 = () => {
        setCount( count -1)
    }

    const inCrement2 = () => {
        setCount( PrevCount => PrevCount+1)
    }
    const deCrement2 = () => {
        setCount( count -1)
    }
    const inCrement3 = () =>{
        for(let i = 0; i<5; i++){
            setCount(state => state+1)
        }
    }
    return (
        <div>
            <h2>숫자:{count}</h2>
            <p>
                <button onClick={inCrement1}>증가</button>
                <button onClick={deCrement1}>감소</button>
            </p>
            <p>
                <button>증가</button>
                <button>감소</button>
            </p>
            <p>
                <button onClick={inCrement2}>증가</button>
                <button onClick={deCrement2}>감소</button>
            </p>
            <p>
                <button onClick={inCrement3}>5씩 증가</button>
            </p>
        </div>
    );
};

export default Test8;