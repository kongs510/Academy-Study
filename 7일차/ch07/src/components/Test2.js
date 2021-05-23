import React,{useState} from 'react';
import "./Test2.css"
const Test2 = () => {
    const [age, setAge] = useState(20);
    const [isColor, setIsColor] = useState(false);
    const onAge =() => {
        setAge(prevAge => prevAge -1)
        setAge(prevAge => prevAge -1)
    }
    const onColor = () => {
        setIsColor(!isColor)
        //한번 누르면 true 한번누르면 false !표시
    }
    return (
        <div>
            <div className={`wrap ${isColor ? "tomato":"pink"}`}>
                {/* $ 는 제이쿼리의 $ 랑 전혀다름  제이쿼리 $ useEffect에서만 사용가능 */}
                <h2>배경색:{isColor ? "tomato":"pink"} </h2>
                <h2>나이: {age}</h2>
                <p>
                    <button onClick={onColor}>배경색</button>
                    <button onClick={()=>setAge(age+1)}>나이증가</button>
                    <button onClick={onAge}>나이감소</button>
                </p>
            </div>
        </div>
    );
};

export default Test2;