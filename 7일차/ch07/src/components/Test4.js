import React, { useState } from 'react';


const Name = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <h3>Name</h3>
            <p>
                <label htmlFor="name">이름</label>
                <input type="text" onChange={e=>setText(e.target.value)} />
                <span style={{marginLeft:15}}>
                    {text}
                </span>
            </p>
        </div>
    );
};

const Animal = ({ani,onAni}) => {
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

const Display = ({ani}) => {
    return (
        <div>
            <h3>Display</h3>
            <h4>내가 좋아하는 동물은 {ani}입니다.</h4>
            <h4>{`내가 좋아하는 동물은 ${ani} 입니다.`}</h4>
        </div>
    );
};

const Test4 = () => {
    const [ani, setAni] = useState("동물");
    //상태값은 자식컨포넌트에 있으면 바꾸는것도 자식컨포넌트에 반대로 부모컨포넌트에 있으면 바꾸는것도 부모컨포넌트에서 변경
    
    //상태값 관리
    const onAni = (e) => {
        const {value} = e.target
        setAni(value)
    }
    return (
        <div>
            < Name />
            <hr/>
            < Animal ani={ani} onAni={onAni} />
            <hr/> 
            < Display ani={ani} />
            <hr/>
        </div>
    );
};

export default Test4;