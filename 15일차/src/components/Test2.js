import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test2 = () => {
    const [post, setPost] = useState({});
    const [num, setNum] = useState(3);
    const [id, setId] = useState(3);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`).then(res=>{
            setPost(res.data)
        })
    }, [id]);

    const click=()=>{
        setId(num)
    }
    return (
        <div>
            <input type="text" value={num} onChange={e=>setNum(e.target.value)}/>
            <button onClick={click}>검색</button>
            <h2>
                {post.title}
            </h2>
        </div>
    );
};

export default Test2;