import React, { children, createContext, useContext, useRef, useState } from 'react';

const TesksContext=createContext()

const TesksProvider = ({children}) => {
    const no=useRef(3)
    const [data, setData] = useState([
        {id:1,text:"강호동",done:true},
        {id:2,text:"이효리",done:true},
    ]);
    const [text, setText] = useState("");

    const onText = (e)=>{
        const{value}=e.target
        setText(value)
    }
const onAdd=(text) =>{
    if(!text) return
    setData([
        ...data,{id:no.current++,text,done:false}
    ])
    setText('')
}

const onDel=(id)=>{
    setData(data.filter(item=>item.id===id))
}
const onToggle =(id)=>{
    setData(data.map(item=>item.id===id ?
        {...item,done:!item.done}:item))
}

    return (
            <TesksContext.Provider value={{data,text,onText,onAdd,onDel,onToggle}}>
                {children}
            </TesksContext.Provider>
    );
};

export default TesksProvider;

export const useTask =() => {
    const {data,text,onText,onAdd,onDel,onToggle} = useContext(TesksContext);
    return {data,text,onText,onAdd,onDel,onToggle}
}