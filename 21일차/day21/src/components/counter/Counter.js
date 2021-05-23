import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAsync, incrementAsync } from '../../store/modules/counter';

const Counter = () => {
    const cnt = useSelector(state => state.counter.cnt)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>숫자:{cnt}</h1>
            <p>
                <button onClick={()=> dispatch(incrementAsync())}>증가</button>
                <button onClick={()=> dispatch(decrementAsync())}>감소</button>
            </p>
        </div>
    );
};

export default Counter;