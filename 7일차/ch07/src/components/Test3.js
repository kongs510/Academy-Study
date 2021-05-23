import React, { useRef, useState } from 'react';

const Test3 = () => {
    const nameRef = useRef()
    const [form, setForm] = useState({
        username:"",
        userage:"",
        useremail:""
    });

    const {username,userage,useremail} =form
    //form = {username:"",userage:"",useremail:""}
    // const [username, setUsername] = useState("");
    // const [userage,setUserage]=useState("")
    // const [useremail, setUseremail] = useState("");
    const change = (e) =>{
        const{value,name} = e.target
        // setUsername(value)
        setForm({
            ...form,//다른것들은 사라지는것을 방지 
            [name]:value
        })
    }
    const onReset  = () =>{
        setForm({
          username:"",
          userage:"",
          useremail:""
        })
        nameRef.current.focus()
    }
    return (
        <div>
            <p>
                <input type="text" onChange={change} ref={nameRef} value={username} name="username"/>
                <input type="text" onChange={change} value={userage} name="userage" />
                <input type="text" onChange={change} value={useremail} name="useremail"/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름:{username}</h4>
            <h4>나이:{userage}</h4>
            <h4>이메일:{useremail}</h4>
        </div>
    );
};

export default Test3;