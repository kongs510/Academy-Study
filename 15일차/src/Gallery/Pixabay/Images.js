import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import GlobalStyle from '../styled/Global';
import ImageList from './ImageList';
import ImageSearch from './ImageSearch';

const Container = styled.div`
    width: 1400px;
`

const Images = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const API_KEY = '17101818-67b2734a35fa00495d1730642'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
            .then(res => {
                setData(res.data.hits)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setData([])
                setLoading(true)
                setError("주소를 확인하세요")
            })
    }, [text]);
    const onSearch = (msg) => {
        setText(msg)
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <ImageSearch onSearch={onSearch} />
                {loading && data === (<h1>No Imgage Found</h1>)}
                {
                    data && !loading && <ImageList data={data} />
                }
                {
                    error ? <h1>error</h1> : null
                }
            </Container>
        </>
    );
};

export default Images;