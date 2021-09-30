import React from 'react';

const Test6Count = ({count,text}) => {
    console.log("test6count")
    return (
        <div>
            <h2>{text}/{count}</h2>
        </div>
    );
};

export default React.memo(Test6Count);