import React, { useRef } from 'react';

const Test11 = () => {
    const nameRef = useRef(null)
    const pwRef=useRef(null)

    const onClick = () => {
        const data = {
            name:nameRef.current.value,
            pw:pwRef.current.value
        }
        const json = JSON.stringify(data,null,5)
        console.log(json)
    }
    return (
        <div>
            {/*useRef 수업용, 실제로 사용하는것은 권장하지 않는다.  */}
            <input type="text" ref={nameRef}/>
            <input type="text" ref={pwRef}/>
            <button onClick={onClick}>확인</button>
        </div>
    );
};

    export default Test11;