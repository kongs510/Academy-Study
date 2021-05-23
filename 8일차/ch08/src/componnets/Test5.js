import React, { useRef, useState } from 'react';

const List = ({data}) => {
    return (
        <div>
            {
                data.map(item=><p key={item.id}>
                    {item.no} / {item.text}
                </p>)
            }
        </div>
    );
};


const Form = ({onAdd}) => {
    
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd(text)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={e=> setText(e.target.value)} />
        </form>
    );
};

const Test5 = () => {
    const no =useRef(1)
    const [data, setData] = useState([]);
    const onAdd = (text) => {
        setData([
            ...data,
            {
                id:no.current++,
                text
            }
        ])
    }
    return (
        <div>
            <Form onAdd = {onAdd} />
            <List data={data}/>
        </div>
    );
};

export default Test5;