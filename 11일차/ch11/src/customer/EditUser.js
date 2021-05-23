import React, { useEffect, useState } from 'react';

const EditUser = ({current,onModify,setIsEdit}) => {
    const [user, setUser] = useState(current);
    const {id,name,addr} =user

    const changeInput = (e) =>{
        const {value,name}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        //id 번호비교, user갱신
        onModify(id,user)
        setUser({
            name:"",addr:""
        })
    }
    useEffect(() => {
        setUser(current)
    }, [current]);
    return (
        <form  onSubmit={onSubmit}>
           <h2>고객리스트 수정</h2>
           <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput}/>
           </p>
           <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput}/>
           </p>
           <p>
           <button type="submit">추가</button>
           <button onClick={()=>setIsEdit(false)}>취소</button>
           </p>
        </form>
    );
};

export default EditUser;