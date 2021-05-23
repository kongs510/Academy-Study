import React from 'react';

const Test5Display = ({ani}) => {
    return (
        <div>
             <h3>Display</h3>
            <h4>내가 좋아하는 동물은 {ani}입니다.</h4>
            <h4>{`내가 좋아하는 동물은 ${ani} 입니다.`}</h4>
        </div>
    );
};

export default Test5Display;