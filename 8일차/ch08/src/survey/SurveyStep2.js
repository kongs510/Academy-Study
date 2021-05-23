import React from 'react';

const SurveyStep2 = ({form, onText,preNext,onNext  }) => {
    const {occ, tel, sex } =form
    return (
        <>
            <p><label>직업</label>: 
            <input type="text" name="occ" value={occ} onChange={onText}/></p>
            <p><label>연락처</label>: 
            <input type="text" name="tel" value={tel} onChange={onText}/></p>
            <p><label>성별</label>: 
            <input type="text" name="sex" value={sex} onChange={onText}/></p>
            
            <p>
            <button onClick={preNext}  >이전</button>
                <button onClick={onNext} >다음</button>
            </p>
        </>
    );
};

export default SurveyStep2;