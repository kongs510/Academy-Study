import React, { useState,useRef } from 'react';


const Test2 = () => {
    const no = useRef(1)
    const [data, setData] = useState([]);
    const names="홍길동,김길동,남길동,동길동,이길동,이승기,이효리".split(",")

    const onAdd = () => {
        const ran =Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                no:no.current++,
                text:names[ran]
            }
        ])
    }
    return (
        <div>
            <button onClick={onAdd}>추가</button>
            {
                data.map(item=><p key={item.no}>
                {item.no}/{item.text}
                </p>)
            }
        </div>
    );
};

export default Test2;