import React from 'react';

const Test5Ani =  ({ani,onAni}) => {
    return (
        <div>
               <h3>Animal</h3>
        <p>
            <label>좋아하는 동물은?</label>
            <input type="text" ani={ani} onChange={onAni}/>
        </p>
        </div>
    );
};

export default Test5Ani;