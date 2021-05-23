import React, { useEffect, useState } from 'react';
import "./MelonForm.css"

const MelonForm = ({onSearch}) => {
    const [text, setText] = useState("");

    const changeInput = (e) =>{
        const {value} =e.target
        setText(value)
    }

    useEffect(() => {
        onSearch(text)
    }, [text]);
    //실시간 되게하는것! 한번알아보자

    const onSubmit = (e) => {
        e.preventDefault()
        // if(!text) return

        //검색
        onSearch(text)
        setText("")
    }
    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={changeInput}/>
        </form>
    );
};

export default MelonForm;