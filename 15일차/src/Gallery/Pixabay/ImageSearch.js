import React, { useState } from 'react';
import styled from "styled-components"

const ImageForm = styled.form`
input{
    width: 500px;
    height: 40px;
    padding:0 15px
}
    
    text-align:center;
    padding: 40px 0%;
`
const ImageSearch = ({ onSearch }) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault()
        onSearch(text)
    }
    return (
        <ImageForm onSubmit={onSubmit}>
            <input type="text" value={text} placeholder="검색할 이미지를 입력하세요" onChange={e => setText(e.target.value)} />
        </ImageForm>
    );
};

export default ImageSearch;