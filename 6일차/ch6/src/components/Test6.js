import React, { useState } from 'react';

const Test6 = () => {
    const [bgcolor,setBgcolor] = useState("pink")
    const onColor = () => {
        setBgcolor(bgcolor==="pink"?"tomato":"pink")
    }
    return (
        <div>
            <p>h2 누르면 pink = tomato</p>
            <h2 style={{width:300,padding:20,border:"1px solid #000",backgroundColor:bgcolor,cursor:"cursor"}} onClick={onColor}>컬러:{bgcolor} pink/tomato</h2>
        </div>
    );
};

export default Test6;