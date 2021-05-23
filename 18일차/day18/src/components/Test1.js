import React, { useMemo, useState } from 'react';

const Test1 = () => {
    console.log('test1')
    const [cnt1, setCnt1] =useState(1)
    const [cnt2, setCnt2] =useState(10)

    //함수를 별도로 만들어서 사용 - return 처리할때
    //return값을 기억 - useMemo     
    const isEven =useMemo(()  => {
        console.log('isEven')
        console.log( cnt1 )
        return cnt1 % 2 === 0 
    },[cnt1])

    return (
        <div>
            <h2>{cnt1}</h2>        
            <button onClick={() =>setCnt1(cnt1+1)}> 증가 </button>
            <h2>{cnt2}</h2>        
            <button onClick={()=>setCnt2(cnt2+1)}> 증가 </button>
            <hr/>
            <h1>
                {isEven ? '짝수' : '홀수'}
            </h1>

        </div>
    );
};

export default Test1;

/*
    useMemo( function , deps )
    function : 사용자 정의함수 
    deps : 값이 변경되면 함수연산을 다시하고 
           변경되지 않으면 연산값을 재사용한다 

    useMemo : return 값을 기억 ( 연산값을 재사용 ) 


    useCallback( function , deps )
    function : 사용자 정의함수 
    deps : 값이 변경되면 함수를 다시생성 하고 
           변경되지 않으면 함수를 재사용한다

    useCallback : 함수를 기억 ( 함수를 재사용 )

    실제작업의  90%  useCallback

    - 함수 컴포넌트는 렌더링 될때마다 내부의 것을 다시 계산처리해야함 
    생성뿐 아니라 업데이트 될때마다 다시 만들어 사용하기때문이다 
    그래서  use*  필요함 
    함수형이라 함수 실행될때마다 내의것을 메모리가 안되서 다시 만들어야 쓸수 있다 
    useMemo /useCallback 
*/