import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change_input, insert } from '../../store/modules/todos';

const TodoInput = () => {
    const text =useSelector(state=>state.todos.text)
    const dispatch=useDispatch()

    const onSubmit =(e) => {
        e.preventDefault()
        dispatch(insert(text))
        dispatch(change_input(""))
    }
    const onText =(e)=>{
        const {value}=e.target
        dispatch(change_input(value))
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onText}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;