import React, { useState,useRef } from 'react';

const Test4 = () => {
    const no = useRef(1)
    const textRef = useRef("")
    const [data, setData] = useState([]);
    const [text, setText] = useState("");

    const onAdd = (e) => {
        e.preventDefault()
        const newData = {id:no.current++,text}
        setData([
            ...data,newData
        ])
        setText("")
        textRef.current.focus()
    }
    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="text" ref={textRef} value={text} onChange={e => setText(e.target.value)} />
                <button type="submit">추가</button>
            </form>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test4;