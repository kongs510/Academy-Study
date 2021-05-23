import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {pink,tomato} from '../../store/modules/color';

const Color = () => {
    const color = useSelector(state=>state.color.color)
    const dispatch = useDispatch()
    return (
        <div>
           <h1 style={{color:color}}>컬러:{color}</h1> 
           <p>
                <button onClick={()=>dispatch(pink())}>pink</button>
                <button onClick={()=>dispatch(tomato())}>tomato</button>
           </p>
        </div>
    );
};

export default Color;