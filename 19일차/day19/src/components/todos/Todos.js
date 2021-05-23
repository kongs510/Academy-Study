import React from 'react';
import { useTodos } from '../../contexts/TodosContext';

const Todos = () => {
    const {data,text,onAdd,changeInput,onToggle}=useTodos()
    return (
        <div>
            <input type="text" onChange={changeInput} value={text}/>
            <button onClick={()=>onAdd(text)}>추가</button>

            <ul>
                {
                    data.map(item =>
                    <li key={item.id} style={{color:item.done ? "tomato":"#000"}}>번호:{item.id}/이름{item.text}
                    <input type="checkbox" checked={item.done}
                    onChange={()=>onToggle(item.id)}
                    />
                </li>)
                }
            </ul>
        </div>
    );
};

export default Todos;