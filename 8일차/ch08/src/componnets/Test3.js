import React, { useRef, useState } from 'react';

const Test3 = () => {
    const nameRef =useRef()
    const no =useRef(1)
    const [data, setData] = useState([]);
    //데이터담을 공간

    const [form,setForm]=useState({
        name:"",
        pw:""
    })
    const{name,pw}=form
    //비구조 할당 
    //아니면 form.name , form.pw 이런식으로 써야함

    const change=(e) => {
        const{name,value} =e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id:no.current++,
                name,
                pw
            }
        ])
        setForm({
            name:"",
            pw:""
        })
    }

    const onAdd1 = () => {
        setData([
            ...data,
            {
                id:no.current++,
                name,
                pw
            }
        ])
        nameRef.current.focus()
        //nameRef 위치로 이동
    }

    return (
        <div>
            <input type="text" name="name" value={name} onChange={change} ref={nameRef} />
            <input type="text" name="pw" value={pw} onChange={change} />
            <button onClick={onAdd} >추가</button>
            <hr/>
            <ul>
            {
                data.map(item => <li key={item.id}>
                    {item.id} / {item.name} / {item.pw}
                </li>)
            }
            </ul>
        </div>
    );
};

export default Test3;