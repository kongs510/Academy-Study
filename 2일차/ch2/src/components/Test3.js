import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        const txt1="나는 공부중"
        const txt2="리액트"
        const txt3 ="파이팅!"
        const style1={
            backgroundColor:"pink",
            border:"1px solid #000",
            width:"400px",
            height:"50px",
            linehieght:"50px",
        }
        const style2 ={
            width:600,height:200,padding:20,
            border:"1px solid #000"
        }

        return (
            <div>
                <h1 style={style1}>{txt1}</h1>
                <h1 style={style2}>{txt2}</h1>
                <h1>{txt3}</h1>
                <p style={{
                    color:"red",fontSize:100,backgroundColor:"line"
                }}>
                    안녕하세요?
                </p>
            </div>
        );
    }
}

export default Test3;
