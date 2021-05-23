import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1=useRef()

    useEffect(() => {
        // ref1.curent.focus()
    },[]);

    useLayoutEffect(()=>{
        ref1.curent.focus()
    },[])

    return (
        <div>
            <input type="text" ref={ref1}/>
        </div>
    );
};

export default Test2;