import React, { Component, Fragment } from 'react';

class Sub extends Component {
    render() {
        //div 대신 Fragment || <> 사용!
        // 왜냐면 div를 하면 div 생성됨 
        //숫자나 블린은 { } 한번 감싸준다 객체의 의미는 x
        // 화면의 트루 펄스는 출력이 되지않는다.


        //비구조 할당
        const {name,age,addr,tel,sex,color,done} =this.props
        //생략이 가능함!
        return(
            <Fragment>
                <h2>Sub 컴포넌트</h2>
                <ul>
                    <li>이름:{this.props.name}</li>
                    <li>나이:{this.props.age}</li>
                    <li>주소:{this.props.addr}</li>
                    <li>전화:{this.props.tel}</li>
                    <li>컬러:{this.props.color}</li>
                    <li>성별:{this.props.sex}</li>
                    <li>참거짓:{this.props.done}</li>
                    <li>참거짓:{this.props.done ? "참":"거짓"}</li>
                    <li>이름:{name}</li>
                    <li>나이:{age}</li>
                    <li>주소:{addr}</li>
                    <li>전화:{tel}</li>
                    <li>컬러:{color}</li>
                    <li>성별:{sex}</li>
                    <li>참거짓:{done}</li>
                    <li>참거짓:{done ? "참":"거짓"}</li>
                </ul>

            </Fragment>
        );
    }
}

class Test6 extends Component {
    render() {
        //div 대신 Fragment || <> 사용!
        // 왜냐면 div를 하면 div 생성됨 
        return(
            <Fragment>
                <h1>props 사용법</h1>
                <hr/>
                <Sub
                    name="홍길동"age={20}addr="서울"tel="0101231234"color="tomato"sex="남자"done={ true }
                />
            </Fragment>
        );
    }
}

export default Test6;
