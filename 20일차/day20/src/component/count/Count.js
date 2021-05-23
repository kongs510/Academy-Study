import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/modules/count';

const Count = () => {
        const cnt =useSelector(state=>state.count.cnt)
        const color = useSelector(state=>state.color.color)
        const dispatch=useDispatch()
        return (
        <div>
           <h1 style={{color:color}}>카운터:{cnt}</h1>
           <button onClick={()=>dispatch(increment())}>증가</button>
           <button onClick={()=>dispatch(decrement())}>감소</button>
        </div>
    );
};

export default Count;