import React, { useRef } from 'react';

const Test12 = () => {
    const colorRef =useRef(null)
    const onClick = () => {
            const data = {
                color : colorRef.current.value
            }
            const json =JSON.stringify(data,null,5)
            console.log(json)
    }
    return (
        <div>
           <h2>컬러선택</h2>
            <select ref={colorRef}>
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

export default Test12;