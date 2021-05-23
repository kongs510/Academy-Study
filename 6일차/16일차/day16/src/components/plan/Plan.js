import React, { useState } from 'react';
import GlobalStyle from '../styled/Global';
import data from './data';
import PlanAdd from './PlanAdd';
import PlanList from './PlanList';

const Plan = () => {
const [plans, setPlans] = useState(data);

const onAdd=(form)=>{
    form.id=Math.random() *1000000
    setPlans([...plans,form])
}
const onDel=(id)=>{
    setPlans(plans.filter(plan=>plan.id !==id))
}
const onToggle=(id)=>{
    const newData = plans.map(plan=>plan.id === id ?
        {...plan,done:!plan.done}:plan)
        setPlans(newData)
}

    return (
        <div>
           <GlobalStyle/> 
           <PlanAdd onAdd={onAdd}/>
           <PlanList plans={plans} onDel={onDel} onToggle={onToggle} />
        </div>
    );
};

export default Plan;