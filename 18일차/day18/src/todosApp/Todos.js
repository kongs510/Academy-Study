import React, { useCallback, useRef, useState } from 'react';
import '../utils/css/reset.css'
import './Todos.css'
import TodosForm from './TodosForm';
import TodosList from './TodosList';

const Todos = () => {
    const idRef = useRef(1)
    const [todos, setTodos] = useState([])

    const onAdd = useCallback( (text) => {
        setTodos([
            ...todos , 
            {
                id : idRef.current++ ,
                text ,  
                done: false
            }
        ])
    },[todos])

    const onRemove = useCallback( (id)  => {
        const newData = todos.filter( todo => todo.id !== id )
        setTodos( newData )
    },[todos])

    const onToggle =useCallback( ( id ) => {
        const newData = todos.map( todo => todo.id === id ? {...todo, done:!todo.done}:todo )
        setTodos( newData )
    },[todos] )
    

    return (
        <div className="Todos">
            <h1>TodoList</h1>
            <TodosForm  onAdd = { onAdd } />
            <TodosList  todos= {todos}  onRemove={onRemove} 
                         onToggle={onToggle} />
        </div>
    );
};

export default Todos;