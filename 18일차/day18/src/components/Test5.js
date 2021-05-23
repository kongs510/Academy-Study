import React, { useCallback, useMemo, useState } from 'react';

const Test5 = () => {
    const [text , setText] = useState('')
    const [data , setData] = useState([])

    const textSize =useMemo( ()  => {
        return text.length
    },[text] )

    const onAdd  =useCallback( ()  => {
        setData([...data , text])
    },[data, text] )
    
    return (
        <div>
            <h2>예제는 수업용 </h2>
            <input type="text" onChange={e => setText(e.target.value)} />
            <button onClick={onAdd}>추가</button>
            <h3>글자:{text} </h3>
            <h3>글자개수: {text.length} </h3>
            <hr/>
            <h3>글자개수: { textSize } </h3>
        </div>
    );
};

export default Test5;