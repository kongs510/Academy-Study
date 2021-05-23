import React from 'react';

const Test6Step1 = ({firstname,lastname,email}) => {
    return (
        <>
            <p>
                <label>성</label>
                <input type="text" value={firstname} name="firstname" />
            </p>   
            <p>
                <label>이름</label>
                <input type="text" value={lastname} name="lastname" />
            </p>   
            <p>
                <label>이메일</label>
                <input type="text" value={email} name="email" />
            </p>  
            <p>
                <button>다음</button>
            </p>
        </>
    );
};

export default Test6Step1;