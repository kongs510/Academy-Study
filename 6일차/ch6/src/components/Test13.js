import React, { useState } from 'react';

const Test13 = () => {
    const [color,setColor] = useState("")
    const onClick = () => {

    }
    const onColor = (e) => {
        setColor(e.target.value)
    }
    return (
        <div>
              <h2 style={{color:color}}>컬러 ref 수업용:{color}</h2>
            <select onChange={onColor}>
                <option value="tomato">tomato</option>
                <option value="skyblue">skyblue</option>
                <option value="pink">pink</option>
                <option value="yellow">yellow</option>
                <option value="lime">lime</option>
            </select> 
            <button onClick={onClick}>선택</button>
        </div>
    );
};

export default Test13;