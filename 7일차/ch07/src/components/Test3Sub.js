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
    const change1 = (e) =>{
        const{value} = e.target
        // setUsername(value)
        setForm({
            ...form,//다른것들은 사라지는것을 방지 
            username:value
        })
    }
    const change2 = (e) =>{
        const {value} = e.target
        // setUserage(value)
        setForm({
            ...form,//다른것들은 사라지는것을 방지 
            userage:value
        })
    }
    const change3 = (e) =>{
        const{value} = e.target
        // setUseremail(value)
        setForm({
            ...form,//다른것들은 사라지는것을 방지 
            useremail:value
        })
    }
    const onReset  = () =>{
        nameRef.current.focus()
    }
    return (
        <div>
            <p>
                <input type="text" onChange={change1} ref={nameRef} value={username} name="username"/>
                <input type="text" onChange={change2} value={userage} name="userage" />
                <input type="text" onChange={change3} value={useremail} name="useremail"/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름:{username}</h4>
            <h4>나이:{userage}</h4>
            <h4>이메일:{useremail}</h4>
        </div>
    );
};

export default Test3;