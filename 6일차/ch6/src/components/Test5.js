import React, { useState } from 'react';

const Test5 = () => {
    const [name,setName] = useState("아무개")
    const [color,setColor] = useState("lime")

    const onName1 = () => {
        setName("홍길동")
    }
    const onName2 = () => {
        setName("유재석")
    }
    const onName3 = () => {
        setName("김소각")
    }
    return (
        <div>
           <h2>이름:{name}</h2>
            <p>
            <button onClick={onName1}>홍길동</button>   
            <button onClick={onName2}>유재석</button>   
            <button onClick={onName3}>김소각</button>   
            </p> 
            <p>
            <h2 style={{color:color}}>컬러:{color}</h2>
            <button onClick={()=>setColor("pink")}>pink</button>   
            <button onClick={()=>setColor("tomato")}>tomato</button>   
            <button onClick={()=>setColor("skyblue")}>skyblue</button>   
            </p> 
        </div>
    );
};

export default Test5;