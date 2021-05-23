import React, { useRef, useState } from 'react';

const Test10 = () => {
    const nameRef=useRef()
    const [name,setName] =useState("")
    const [pw,setPw] =useState("")

    const handleChange1 = (e) => {
        const {value} = e.target
        setName(value)
    }
    const handleChange2 = (e) => {
        const {value} = e.target
        setPw(value)
    }
    const onReset = () => {
        setName("")
        setPw("")
        nameRef.current.focus()
    }

    return (
        <div>
            <input type="text" onChange={handleChange1} value={name} ref={nameRef}/>
            <input type="text" onChange={handleChange2} value={pw}/>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default Test10;