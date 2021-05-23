import React, { useState } from 'react';

const Test1 = () => {
    const [check,setCheck] = useState(false)
    const change = (e) => {
        setCheck(e.target.checked)
    }
    const click = () => {
        console.log(`checked ${check}`)
    }
    return (
        <div>
            <p>
                <input type="checkbox" onChange={change} checked={check} />
                체크박스 확인
                <button onClick={click}>확인</button>
            </p>
            {
                check && 
                <div style={{width:300,height:200,background:"red"}}></div>
            }
        </div>
    );
};

export default Test1;