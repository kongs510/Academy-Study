import React from 'react';
import TodosItem from './TodosItem';
import './TodosList.css'

const TodosList = ({ todos , onRemove , onToggle }) => {
    return (
        <div className="TodosList">
            <ul>
                {
                    todos.map( todo => <TodosItem key={todo.id}
                                        todo={todo} 
                                        onRemove={onRemove}
                                        onToggle= { onToggle }
                                        />)
                }
            </ul>
        </div>
    );
};

export default TodosList;