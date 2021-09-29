import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
width: 1300px;margin: auto;
display: flex;justify-content:space-between;
flex-wrap:wrap;
`
const Article = styled.article`
width:350px;border:1px solid #dcdcdc;padding: 30px;
margin-bottom:20px;   
`

const Test1 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setPosts(res.data)
        })
    }

    return (
        <div>
            <Container>
                {
                    posts.map(post => <Article key={post.id}>
                        {post.title}
                        <p>
                            {post.body}
                        </p>
                    </Article>
                    )
                }
            </Container>
        </div>
    );
};

export default Test1;