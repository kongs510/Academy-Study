import React from 'react';

const Test1 = () => {
    const msg="안녕하세요 저는 길동입니다. 지금은 연습중"
    const message=(len) => {
        let str=""
        if( msg.length > len){
            str=msg.substr(0,len)+"..."
        }
        return str
    }
    return (
        <div>
            <h2>함수형 기초연습</h2>
            <p>{message(10)}</p>
            <p>{message(20)}</p>
        </div>
    );
};

export default Test1;