import React from 'react';
import PlanItem from './PlanItem';

const PlanList = ({plans,onDel,onToggle}) => {
    return (
        <div>
            {
            plans.map( plan => <PlanItem key={plan.id} plan={plan} onDel={onDel}onToggle={onToggle}>
                </PlanItem>)
            }
        </div>
    );
};

export default PlanList;