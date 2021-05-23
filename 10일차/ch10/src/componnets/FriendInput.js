import React, { useRef, useState } from 'react';

const FriendInput = ({onAdd}) => {
    const nameRef=useRef()
    const [form, setForm] = useState({
        name:"",age:"",image:""
    })
    const {name,age,image} =form

    const onSubmit = (e) => {
        e.preventDefault()
        //데이터넘김
        onAdd(form) //통째로넘김 (  name:"",age:"",image:"" )
        //폼 input지우기
        setForm({
            name:"",age:"",image:""
        })
        //foucs
        nameRef.current.focus()
    }
    const changeInput = (e) => {
        const {name,value} =e.target
        setForm({
            ...form,
            [name]:value
            // ["name"]:value
        })
    }

    return (
        <form  className="formadd" onSubmit={onSubmit}>
            <p><label>이름</label>
               <input type="text" value={name} name="name" ref={nameRef} onChange={changeInput}  />
            </p>
            <p><label>나이</label>
               <input type="text" value={age} name="age" onChange={changeInput} />
            </p>
            <p><label>사진</label>
               <input type="text" value={image} name="image" onChange={changeInput} />
            </p>
            <p> <button type="submit"> 추가 </button> </p>
        </form>
    );
};

export default FriendInput;