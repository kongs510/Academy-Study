import React, { useState } from 'react';
import Test6Step1 from './Test6Step1';
import "./Test6.css"
import Test6Step2 from './Test6Step2';
import Test6Step3 from './Test6Step3';
import Test6Step4 from './Test6Step4';

const Test6 = () => {
    const [step,setStep] = useState(2)
    const [form, setForm] = useState({
        firstname:1,
        lastname:3,
        email:4,
        occ:"",
        tel:"",
        sex:""
    });
    //form.firstname ?? 애매 그렇기때문에 비구조 할당 사용
    const {firstname,lastname,email,occ,tel,sex} = form
    return (
        <div className="wrap">
            {step ===1 && <Test6Step1
            firstname={firstname}
            lastname={lastname}
            email={email}
            />}
            {step ===2 && <Test6Step2
            occ={occ}
            tel={tel}
            sex={sex}
            />}
            {step ===3 && <Test6Step3/>}
            {step ===4 && <Test6Step4/>}
        </div>
    );
};

export default Test6;