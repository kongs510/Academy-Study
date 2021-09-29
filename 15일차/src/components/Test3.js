import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Test3 = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => { //응답성공
        axios.get("https://jsonplaceholder.typicode.com/posts/").then(res=>{
            setPosts(res.data)
            setLoading(false)
            setError('')
        })
        .catch(error=>{ //실패
            setPosts([])
            setLoading(true)
            setError("데이터를 찾을수 없습니다.")
        })
        })
    return (
        <div>
            <ul>
               {
               posts&&loading?<h2>로딩중</h2>
               :
               posts.map(post=><li key={post.id}>
                {post.id}/{post.title}
               </li>)} 
            </ul>
            <p>{error?error:null}</p>
        </div>
    );
};

export default Test3;