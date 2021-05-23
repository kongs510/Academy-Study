import React, {createContext, useContext, useRef, useState } from 'react';

const TodosContext = createContext()


const TodosProvider = ({children}) => {
    const no =useRef(5)
    const [data,setData] =useState([
        {id:1,text:"홍길동",done:false},
        {id:3,text:"이길동",done:true},
        {id:3,text:"김길동",done:false},
        {id:4,text:"박길동",done:true},
    ])

    const [text, setText] = useState("")

    const changeInput =(e) =>{
        const {value} = e.target
        setText(value)
    }

    const onAdd=(text) =>{
        if(!text) return

        setData([
            ...data,
            {
                id:no.current++,
                text,
                done:false
            }
        ])
        setText("")
    }
    const onToggle = (id)=>{
        setData(data.map(item=> item.id ===id ? 
            {...item, done:!item.done}:item))
    }
    return (
       
            <TodosContext.Provider value={{data,text,onAdd,changeInput,onToggle}}>
                {children}
            </TodosContext.Provider>
        
    );
};

export default TodosProvider;

export const useTodos =()=>{
    const {data,text,onAdd,changeInput,onToggle}=useContext(TodosContext)
    return {data,text,onAdd,changeInput,onToggle}
}