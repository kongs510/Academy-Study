import React, { Component } from 'react';

class Test2 extends Component {
     //클래스 영역
    render() {
         //js 영역
         const title="jsx문법";
         const name="공민철";
         const age=32;
         const addr="서울";
         const sex="남자";
         const tel="010-000-0000";

        return (
            <div>
                <h1>{title}: 신상명세서</h1>
                <ul>
                    <li>이름 :{name}</li>
                    <li>나이 :{age}</li>
                    <li>주소 :{addr}</li>
                    <li>성별 :{sex}</li>
                    <li>전화 :{tel}</li>
                </ul>
                //주석
                /* 주석 */
                {/* 주석 */}
                <p 
                //한줄주석
                /*
                공부중입니다!
                */
                >
                    지금은 공부중!
                </p>

            </div>
        );
    }
}

export default Test2;
