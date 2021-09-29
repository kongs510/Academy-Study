import React from 'react';
import styled from "styled-components"

const ImageBox = styled.article`
margin-bottom:30px;border: 1px solid #000;padding: 15px;
img{width: 100%;}
h3{font-size:25px;color:tomato;margin:20px 0}
ul{
    margin-bottom:30px;
    li{margin-bottom:10px;
    em{
        display:inline-block;width: 140px;font-weight: 600;
    }
    }
    p{
        margin-bottom:30px;
        span{margin-right:10px}
    }
}
`

const ImageItem = ({ item }) => {
    const { webformatURL, views, downloads, likes, tags, user } = item
    const taglist = tags.split(',')
    return (
        <ImageBox>
            <img src={webformatURL} alt="" />
            <h3>{user}</h3>
            <ul>
                <li><em>조회수:{views}</em></li>
                <li><em>다운로드:{downloads}</em></li>
                <li><em>좋아요:{likes}</em></li>
            </ul>
            <p>태그:{taglist.map(tag => <span>#{tag}</span>)}</p>
        </ImageBox>
    );
};

export default ImageItem;