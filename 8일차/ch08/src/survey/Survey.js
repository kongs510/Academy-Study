import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {
    const [ step , setStep ] = useState(1)
    const [ form , setForm ] = useState({
        firstname:'',
        lastname:'' ,
        email:'',
        occ:'',
        tel:'',
        sex:''
    })
    //실제데이터 관리는 여기서함

    const { firstname, lastname, email, occ, tel, sex } = form 
     
    const onText = (e) => {
        const {name,value} =e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const onNext = () => {
        setStep(step+1)
    }
    const preNext = () => {
        setStep(prevStep => prevStep -1)
    }

    return (
        <div className="wrap">
            {step ===1  && <SurveyStep1  firstname={firstname} lastname={lastname} email={email} onText={onText} onNext={onNext} />}
            {/* {step ===2  && <SurveyStep2 occ={occ} tel={tel} sex={sex} />} */}
            {step ===2  && <SurveyStep2 form={form} onText={onText} onNext={onNext}  preNext={preNext} />}
             {step === 3 &&  <SurveyStep3 {...form}  onNext={onNext}  preNext={preNext}  />}
            {step === 4 && <SurveyStep4 {...form} />}

        </div>
    );
};

export default Survey;