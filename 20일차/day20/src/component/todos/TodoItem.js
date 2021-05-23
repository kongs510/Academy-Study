import React from 'react';
import { useDispatch } from 'react-redux';
import { remove, toggle } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const {id,text,done}=todo
    const dispatch =useDispatch()

    return (
        <li style={{color:done? "tomato":"#000"}}>
            <input type="checkbox" checked={done} onChange={()=>dispatch(toggle(id))}/>
            {id}/
            {text}
            <button onClick={()=>dispatch(remove(id))}>삭제</button> 
        </li>
    );
};

export default TodoItem;