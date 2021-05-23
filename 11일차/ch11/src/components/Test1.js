import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [count, setCount] = useState(0);
    const ref1=useRef();
    const ref2=useRef();

    const onColor = ()=>{
        ref1.current.style.color="yellow"
        ref2.current.style.color="red"
        setCount(count+1)
    }

    useEffect(() => {
        console.log("useEffect")
        ref1.current.style.color="skyblue"
    });
    //브라우저에 그려지기전에 실행
    useLayoutEffect(()=>{
        console.log("useLayoutEffect")
        ref2.current.style.color="blue"
    })
    return (
        <div>
            <h1>카운트 :{count}</h1>
            <h1 ref={ref1}>useEffect</h1>
            <h1 ref={ref2}>useLayoutEffect</h1>
            <button onClick={onColor}>컬러와 숫자변경</button>
        </div>
    );
};

export default Test1;
/*
useEffect
 -useEffect 화면에 랜더링이 완료된후 수행
 -컴포넌트가 렌더링 될때마다 작업을 수행
 -클래스 componentDidMount  componentDidUpdate 를수행

-useEffect (콜백함수, [변수])
1. mount /update
    useEffect(() => {
    실행문
});

2. mount
    useEffect(() => {
    실행문
}, []);

3. mount /변수가 변경될때마다 update (state,props(주로) 변경될때마다)
 useEffect(() => {
    실행문
}, [의존변수]);

4. 정리(clean-up)
메모리 누스를 방지하기위해 ui컴포넌트를 제거하기전에 수행
컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect를 정리됨
 useEffect(() => {
    실행문
    return()=>{

    }
}, [props]);

//사용범위
-props으로 받은값을 처리할때
-외부API (axios,fetch)
-setInterval,setTimeout
-외부 라이브러리
 */
