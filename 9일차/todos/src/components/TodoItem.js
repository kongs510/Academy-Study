
import React from 'react';

const TodoItem = ({todo,onRemove,onToggle}) => {
    return (
        <li className={todo.done?"on":""}>
           <span onClick={()=>onToggle(todo.id)}>&#10839;</span>
           <em onClick={()=>onToggle(todo.id)}>{todo.text}</em>
           <button onClick={()=>onRemove(todo.id)}>삭제</button> 
        </li>
    );
};

export default TodoItem;