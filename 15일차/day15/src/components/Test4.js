import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Test4 = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState(`text`);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => { //응답성공
        axios.get(`https://hn.algolia.com/api/v1/search?query=${text}`).then(res=>{
            setPosts(res.data.hits)
            setLoading(false)
            setError('')
        })
        .catch(error=>{ //실패
            setPosts([])
            setLoading(true)
            setError("주소를 확인하세요")
        })
        })
    return (
        <div>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <ul>
               {
               posts&&loading?<h2>로딩중</h2>
               :
               posts.map(post=><li key={post.objectID}>
                {post.title}
               </li>)} 
            </ul>
            <p>{error?error:null}</p>
        </div>
    );
};

export default Test4;