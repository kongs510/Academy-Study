import React, { useMemo, useState } from 'react';

const Test2 = () => {
    const [ count , setCount] = useState(1)

    const fun = ( cnt ) => {
        console.log( 'test')
        let k = 0
        for( let i = 0 ; i<=1000000000 ; i++ ){
            k++
        }
        return cnt * 10 
    }
    
    const reCount =useMemo( ()  => {
        return fun( count )
    },[count] )

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" onChange={e => setCount(e.target.value)} />
            <hr/>

            <h1> { reCount } </h1>
        </div>
    );
};

export default Test2;