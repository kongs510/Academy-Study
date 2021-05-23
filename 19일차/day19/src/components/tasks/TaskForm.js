import React from 'react';
import { useTask } from '../../contexts/TesksContext';

const TaskForm = () => {
    const {text,onText,onAdd}=useTask()
    const onSubmit =(e)=>{
        e.preventDefault()
        onAdd(text)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onText}/>
            <button type="submit">추가</button>
        </form>
    );
};

export default TaskForm;