import React, { useCallback, useRef, useState } from 'react';
import './TodosForm.css'

const TodosForm = ({ onAdd }) => {
    const textRef = useRef(null)
    const [text, setText] = useState('')

    const onText = useCallback((e) => {
        const {value} = e.target 
        setText( value )
    },[text])

    const onSubmit  = useCallback( (e)  => {
        e.preventDefault()         
        onAdd( text )
        setText('')
        textRef.current.focus()
    }, [onAdd, text] )

    return (
        <form className="TodosForm" onSubmit={ onSubmit }>
            <input type="text" ref={textRef} placeholder="할일을 입력하세요"  value={text} onChange={onText} />

            <button type="submit">추가</button>
        </form>
    );
};

export default TodosForm ;