import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Aritcle } from '../styled/style1';

const PlanItem = ({plan, onDel, onToggle}) => {
    const { id , text , day, done } = plan 
    return (
        <Aritcle className={ done ? 'on':'' }
            onDoubleClick={() => onToggle(id)}
        >
            <h3>일정 : {text} </h3>
            <p>일시: {day} </p>
            <i className="icon" onClick={()  => onDel(id) }>
                <AiOutlineCloseCircle />
            </i>
        </Aritcle>
    );
};

export default PlanItem;