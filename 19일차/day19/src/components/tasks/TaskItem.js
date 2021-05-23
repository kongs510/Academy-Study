import React from 'react';
import { useTask } from '../../contexts/TesksContext';

const TaskItem = ({item}) => {

    const{id,text,done} =item
    const {onDel,onToggle}=useTask()
    return (
        <li style={{color: done? "tomato":"#000"}}>
            <input type="checkbox" checked={done} onChange={()=>onToggle(id)} />
            번호:{id}/이름:{text}
            <button onClick={()=>onDel(id)}>삭제</button>
        </li>
    );
};

export default TaskItem;