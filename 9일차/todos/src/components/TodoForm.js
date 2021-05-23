import React, { useRef, useState } from 'react';
import "./TodoForm.css"

const TodoForm = ({onAdd}) => {
    const textRef=useRef()
    const [text,setText] =useState("")
    const changeInput =(e)=>{
        const {value} = e.target
        setText(value)
    }
    const onSubmit =(e) => {
        e.preventDefault()
        //데이터추가
        onAdd(text)
        setText("")
        textRef.current.focus()
    }
    return (
        <div>
            <form className="TodoForm" onSubmit={onSubmit}>
                <input type="text" value={text} onChange={changeInput} ref={textRef}/>
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default TodoForm;
