import React, { useCallback, useState } from 'react';
import Test6Count from './Test6Count';
import Test6Title from './Test6Title';

const Test6 = () => {
    const [age, setAge] = useState(10);
    const [money, setMoney] = useState(500000);

    const onAge=useCallback(()=>{
        setAge(age+1)
    },[age])

    const onMoney=useCallback(()=>{
        setMoney(money+1000)
    },[money])

    return (
        <div>
           <Test6Title/> 

           <Test6Count text="나이" count={age}/>
           <button onClick={onAge}>나이증가</button>
           <Test6Count text="급여" count={money}/>
           <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test6;