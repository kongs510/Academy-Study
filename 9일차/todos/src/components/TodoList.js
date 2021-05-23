import React from 'react';
import TodoItem from './TodoItem';
import "./TodoList.css"

const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <div className="TodoList">
            {
                todos.map(todo=><TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)
            }
        </div>
    );
};

export default TodoList;