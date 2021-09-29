import React from 'react';
import styled, { css } from "styled-components"

const Container = styled.div`
    border: 1px solid #000;
    padding: 20px;
    width:${props => props.w};
    background: ${props => props.bg ? props.bg : "yellow"};
`
const Box = styled.button`
 width:${props => props.width ? props.width : "100px"};
 height:50px;
 margin-right: 10px;
 background: ${props => props.back ? props.back : "#dcdcdc"};

 ${props => props.good && css`
 background:tomato;width: 300px;
 margin: 30px;color:#fff;
 border: none;
 transition:0.4s;
 
 &:hover{
     background:hotpink; color:#000;
     cursor: pointer;
}
 `}
`

const Test5 = () => {
    return (
        <div>
            <Container w="700px" bg="pink" >
                <Box width="70px" back="yellow">TEST</Box>
                <Box width="60px">TEST</Box>
                <Box width="100px">TEST</Box>
                <Box width="200px">TEST</Box>
                <Box width="50px" good>TEST</Box>
            </Container>
        </div>
    );
};

export default Test5;