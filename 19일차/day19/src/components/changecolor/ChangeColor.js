import React from 'react';
import { useChange } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const { color , onColor } = useChange()
    return (
        <div>
            <h1 style={{color:color}}>컬러:{color} </h1>
            <p>
                <button onClick={() => onColor('pink')} >pink</button>
                <button onClick={() => onColor('yellow')}>yellow</button>
                <button onClick={() => onColor('tomato')}>tomato</button>
                <button onClick={() => onColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default ChangeColor;