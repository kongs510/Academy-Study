import React from 'react';

const Test9 = () => {
const click =(e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    //target:span 값
    //currentTarget :부모
}

    return (
        <div>
            <button style={{padding:40}} onClick={click}>
                <span style={{fontSize:30}}>확인</span>   
            </button> 
        </div>
    );
};

export default Test9;