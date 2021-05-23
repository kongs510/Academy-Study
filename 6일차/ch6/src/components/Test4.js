import React from 'react';
import Test4Sub from './Test4Sub';



const Test4 = () => {
    return (
        <div>
        <Test4Sub
        name="홍길동"
        age={30}
        addr="서울"
        sex="남자"
        color="skyblue"
        done={true}
        tel="010-123-1234"
        /> 
        <hr/>
        <Test4Sub
        name="김소각"
        addr="부천시"
        sex="여자"
        color="tomato"
        tel="010-123-1234"
        /> 
        <hr/>
        <Test4Sub/>
        </div>
    );
};


export default Test4;