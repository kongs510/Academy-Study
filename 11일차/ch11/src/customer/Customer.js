import React, { useRef, useState }  from 'react';
import './Customer.css'
import '../utils/css/reset.css'
import ListUser from './ListUser';
import AddUser from './AddUser';
import EditUser from './EditUser';

const Customer = () => {
    const no =useRef(5)
    const userData = [
        {id:1,name:"홍길동",addr:"서울"},
        {id:2,name:"이효리",addr:"부산"},
        {id:3,name:"유재석",addr:"경기"},
        {id:4,name:"강호동",addr:"제주"},
    ]
    const [users, setUsers] = useState(userData);
    const [isEdit, setIsEdit] = useState(false);
    const [current, setCurrent] = useState({});

    const onAdd = (user) =>{
        user.id =no.current++
     setUsers(users.concat(user))
    }

    const onRemove = (id) =>{
        alert("삭제")
        setUsers(users.filter(user=>user.id!==id))
    }

    const onEdit = (user) => {
        setIsEdit(true)
        setCurrent(user)
    } 

    const onModify = (id,upData) => {
        setIsEdit(false)
        setUsers(users.map(user=>user.id === id? upData:user))
    }

    return (
        <div className="Customer">
            {
                isEdit ?<EditUser current={current} onModify={onModify} setIsEdit={setIsEdit}/>:
                <AddUser onAdd={onAdd} />
            }
            <ListUser users={users} onRemove={onRemove} onEdit={onEdit}/>
        </div>
    );
};

export default Customer;