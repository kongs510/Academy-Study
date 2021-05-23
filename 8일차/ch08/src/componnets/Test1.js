import React, { useState } from 'react';

const Test1 = () => {
    const [data,setData]= useState([])
    //data =[no:1,text:홍길동],[no:2,text:김길동]

const onAdd= () => {
    const ran=Math.floor(Math.random()*10)
    const newData={no:data.length,text:"김소각"+ran}
    setData([...data,newData])
}

    const onAdd3=()=>{
        const ran=Math.floor(Math.random()*10)
        setData([
            ...data,
            {no:data.length,
            text:"김소각"+ran
        }
        ])
    }

    const onAdd2=()=>{
        setData(data.concat({no:data.length,text:"김소각"+Math.floor(Math.random()*10)}))
    }

    const onAdd1=()=>{
        const newData = data.concat({no:data.length,text:"홍길동"+Math.floor(Math.random()*10)})
        setData(newData)
    }
    return (
        <div>
            <button onClick={onAdd}>데이터 추가</button>
            {
                data.map(item =><p key={item.no}>
                    {item.no} / {item.text}
                </p>)
            }
        </div>
    );
};

export default Test1;