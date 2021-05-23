import React, { useEffect, useState } from 'react';

const MouseMove = () => {
    const [y, setY] = useState(0);
    const [x, setX] = useState(0);

    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }  

   
    useEffect(() => {
        console.log("mount")
        window.addEventListener("mousemove",move)
        return() => {
            window.removeEventListener("mousemove",move)
        }
    },[]);
    return (
        <div>
            <h2>마우스 좌표값</h2>
            <div style={{border:"1px solid #000",width:300,padding:25,margin:10}}>
                <h1>x:{x} , y:{y}</h1>
            </div>
        </div>
    );
};

const Test3 = () => {
    const [isActive, setIsActive] = useState(false);

    const onToggle = ()=> {
        setIsActive(! isActive)
    }
    return (
        <div>
            <button onClick={onToggle}>
                {isActive ?"보이기": "숨기기"}
            </button>
           {isActive && <MouseMove/> }
        </div>
    );
};

export default Test3;