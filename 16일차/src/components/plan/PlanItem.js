import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { Aritcle } from '../styled/style1';

const PlanItem = ({plan,onDel,onToggle}) => {
    const {id,text,day,done}= plan
    return (
        <Aritcle className={done ? "on":""}
        onDoubleClick={()=>onToggle(id)}
        >
            <h3>일정:{text}</h3> 
            <h3>일시:{day}</h3>
            <i className="icon" onClick={()=>onDel(id)}>
            <FaBeer />
            </i>
        </Aritcle>
    
    );
};

export default PlanItem;