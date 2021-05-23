import React from 'react';
import { useColor } from '../../contexts/ColorContext';


const Color = () => {
    const {color, onPink, onTomato, onYellow} = useColor()
    return (
        <div>
            <h1 style={{color:color}}>컬러: {color} </h1>
            <p>
                <button onClick={onPink}>pink</button>
                <button onClick={onYellow}>yellow</button>
                <button onClick={onTomato}>tomato</button>
                <button>skyblue</button>
            </p>
        </div>
    );
};

export default Color;