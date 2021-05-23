import React, { useState } from 'react';
import List from "../utils/api/list"
import "../utils/css/reset.css"
import "./style.css"
import FriendList from './FriendList';

const Friend = () => {
    const [data, setData] = useState(List);
    const onRemove = () =>{
        setData([])
    }
    return (
        <div className="wrap">
            <h1>친구들 총인원:{data.length}</h1>
            <FriendList data={data}/>
            <p className="btn">
                <button onClick={onRemove}>모두삭제</button>
            </p>
        </div>
    );
};

export default Friend;