import React, { useState } from 'react';

const Test7 = () => {
    const [visible,setVisible] = useState(true)

    const onVisible1=()=> {
            setVisible(true)
    }
    const onVisible2=()=> {
        setVisible(false)
    }
    const onToggle=()=> {
        setVisible(!visible)
    }
    return (
        <div>
            <p>
                <button onClick={onVisible1}>보이기</button>
                <button onClick={onVisible2}>숨기기</button>
                <button onClick={onToggle}>{visible ? "숨기기":"보이기"}</button>
            </p>
            {
                visible &&
                <div style={{width:300, height:100,background:"pink"}}>
            </div>
            }
        </div>
    );
};

export default Test7;