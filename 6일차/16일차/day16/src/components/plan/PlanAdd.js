import React, { useState } from 'react';
import { PlanForm } from '../styled/style1';

const PlanAdd = ({onAdd}) => {
    const [form, setForm] = useState({
        text:"",
        day:"",
        done:false
    });
    const {text,day,done} = form
    const onChange = (e)=>{
        const {value,name}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const onSubmit =(e) => {
        e.preventDefault()
        //공백처리
        if(!text||!day) return
        onAdd(form)
        setForm({
            text:"",
            day:"",
            done:false
        })
    }

    return (
        <PlanForm onSubmit={onSubmit}>
            <div>
                <label>일정</label>:
                <input type="text" name="text" value={text} onChange={onChange} />
            </div>
            <div>
                <label>일시</label>:
                <input type="text" name="day" value={day} onChange={onChange}/>
            </div>
            <div>
                <label>중요</label>:
                <input type="checkbox" name="done" checked={done} onChange={onChange}/>
            </div>
            <button type="submit">저장</button>
        </PlanForm>
    );
};

export default PlanAdd;