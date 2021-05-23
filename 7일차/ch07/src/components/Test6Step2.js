import React from 'react';

const Test6Step2 = ({occ,tel,sex}) => {
    return (
        <>
        <p>
            <label>직업</label>
            <input type="text" value={occ}/>
        </p>   
        <p>
            <label>연락처</label>
            <input type="text"value={tel}/>
        </p>   
        <p>
            <label>성별</label>
            <input type="text"value={sex}/>
        </p>  
        <p>
            <button>이전</button>
            <button>다음</button>
        </p>
    </>
    );
};

export default Test6Step2;