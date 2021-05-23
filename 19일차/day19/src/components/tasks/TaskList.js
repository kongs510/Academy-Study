import React from 'react';
import { useTask } from '../../contexts/TesksContext';
import TaskItem from './TaskItem';

const TaskList = () => {
   const {data}= useTask()
    return (
        <ul>
            {
                data.map(item=>  <TaskItem key={item.id} item={item}/>)
            }  
        </ul>
    );
};

export default TaskList;