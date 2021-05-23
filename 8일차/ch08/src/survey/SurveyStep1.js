import React from 'react';

const SurveyStep1 = ({firstname , lastname, email,onText, onNext  }) => {
    return (
        <>
            <p><label>성</label>: 
            <input type="text" name="firstname" value={firstname} onChange={onText}  /> </p>
            <p><label>이름</label>: 
            <input type="text" name="lastname" value={lastname} onChange={onText}   /> </p>
            <p><label>이메일</label>: 
            <input type="text" name="email" value={email} onChange={onText}    /> </p>

            <p><button onClick={onNext}  >다음</button></p>
        </>
    );
};

export default SurveyStep1;