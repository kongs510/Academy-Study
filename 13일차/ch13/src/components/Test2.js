import React, { useEffect, useState } from 'react';

const Test2 = () => {
    const init=[
        {name:"홍길동"},
        {name:"홍길"},
        {name:"길동"},
        {name:"김길동"},
        {name:"abv"},
        {name:"CCc"},
        {name:"Cas"},
        {name:"안녕"},
        {name:"홍길c"},
    ]
    const [data, setData] = useState(init);//출력용
    const [data1, setData1] = useState(init);//검색용
    const [text, setText] = useState("init");
    const changeInput =(e) =>{
        const{value} =e.target
        setText(value)
    }

    // useEffect(() => {
    //     // setData(data1.filter(item.name.indexOf(text)!==-1))
    //     const newData=data1.filter(item=>{
    //         const re =new RegExp(text,"ig")
    //         return item.name.match(re)
    //     })
    //     setData(newData)
    // }, [text]);


    const onSearch = () => {
        //index of(단어)!==-1
        // setData(data.filter(item=>item.name.indexOf(text)!==-1)) //이렇게하면 검색한 내용에서 다른내용을 검색하면 기존것만 나옴
        // setData(data1.filter(item=>item.name.indexOf(text)!==-1)) //그래서 검색용을 따로만들어 계속 유지시킴

        const newData =data1.filter(item=>{
            // const re = new RegExp("검색글자","옵션")
            const re = new RegExp(text,"ig")
            return item.name.match(re)
        })
        setData(newData)

    }

    return (
        <div>
            <input type="text" onChange={changeInput}/>
            <button onClick={onSearch}>검색</button>
            <hr/>
            {
                data.map((item,index) => <p key={index}>
                    {item.name}
                </p>)
            }
        </div>
    );
};

export default Test2;