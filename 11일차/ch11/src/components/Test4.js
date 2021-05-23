import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count, setCount] = useState(1);



    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(count => count+1)
    //         //함수로 이전값을 받아야지 실행이됨
    //         // setCount(count+1)
    //         //이렇게 하면 값을 못넘겨줌
    //         console.log("hi")
    //     }, 1000);
    // },[]);

       useEffect(() => {
        console.log("useEffect")
       const id=setInterval(() => {
           setCount(count => count+1)
       }, 1000);
       return()=>{
           clearInterval(id)
       }   
    });

    // useEffect(() => {
    //     console.log("useEffect")
    //    const id=setInterval(() => {
    //        setCount(count+1)
    //    }, 1000);
    //    return()=>{
    //        clearInterval(id)
    //    }   
    // });
    return (
        <div>
            <h1>숫자:{count}</h1>
        </div>
    );
};

export default Test4;