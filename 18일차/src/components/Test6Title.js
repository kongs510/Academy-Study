import React from 'react';

const Test6Title = () => {
    console.log("test6title")
    return (
        <div>
            <h1>
                나이와급여
                React.memo(컴포넌트):컴포넌트의 
                return 값을 기억한다.
                {/* 재랜더링이 되지않는다? ㄴㄴ 값이 변하면 랜더링 값이 변하지않으면 랜더링 안됨 */}
            </h1>
        </div>
    );
};

export default React.memo(Test6Title);