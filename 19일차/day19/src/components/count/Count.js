import React from 'react';
import { useCount } from '../../contexts/CountContext';

const Count = () => {
    const {cnt , increment , decrement } = useCount()

    return (
        <div>
            <h1>context 숫자: {cnt} </h1>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
};

export default Count;