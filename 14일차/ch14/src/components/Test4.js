import React from 'react';
import styled from "styled-components"


const Container = styled.div`
width:300px;

`
    

const Box1 = styled.section`
padding: 20px;background: pink;transition:2s;margin-bottom:15px;
cursor: pointer;
`
const Box2 = styled.section`` 
const Button = styled.button`
padding:20px 40px;background:blue;` 

const Test4 = () => {
    return (
        <div>
            <Container>
                <Box1>안녕하세요</Box1>
                <Box2>안녕하세요</Box2>
                <Button>확인</Button>
            </Container>
        </div>
    );
};

export default Test4;