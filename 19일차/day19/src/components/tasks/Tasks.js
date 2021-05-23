import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Tasks = () => {
    return (
        <div>
            <TaskForm/>
            <TaskList/>
        </div>
    );
};

export default Tasks;