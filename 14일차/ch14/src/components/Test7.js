import React, { useEffect, useState } from 'react';
import axios from "axios";

const Test7 = () => {
    const [data,setData]=useState([])
    //ajax -useEffect처리
    useEffect(() => {
        getData4()
    }, []);

    const getData4 = async() => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(res.data)
    }

    const getData3 = () => {
        //axios.get("url").then()
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=>{
            setData(res.data)
        })
        
    }

    const getData2 = async() =>{
        const res=await fetch("https://jsonplaceholder.typicode.com/todos")
        const data =await res.json()
        setData(data)

    }

    const getData1=()=>{
        // fetch("url").then(res=>res.json() ).then(res=>값전달)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json() )
        .then(res=>setData(res) )
    }
    return (
        <div>
            <h2>리액트에서 ajax요청 -axios/fetch</h2>
            <p>axios 설치 : fetch 자바스크립트</p>
            {
                data.map(item=><p key={item.key}>
                    {item.id}/{item.title}
                </p>)
            }
        </div>
    );
};

export default Test7;