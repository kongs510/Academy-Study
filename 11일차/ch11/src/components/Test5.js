import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);
    const changeInput = (e) => {
        const {value} = e.target
        setStep(Number(value))
        //그냥하면 안됨 숫자가 늘때는 앞에 Number 붙어야함
    }
useEffect(() => {
    const id = setInterval(() => {
        setCount(count => count+step)
    }, 1000);
    return()=>{
        clearInterval(id)
    }
}, [step]);
    return (
        <div>
            <input type="text" value={step} onChange={changeInput}/>
            <h1>{count}</h1>
        </div>
    );
};

export default Test5;