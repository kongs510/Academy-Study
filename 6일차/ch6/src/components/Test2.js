import React from 'react';

const Test2 = () => {
    const listItem = (len) => {
        let arr=[]
        for(let i = 0; i< len; i++ ){
            arr.push(<li>MainMenu{i}</li>)
        }
        return arr
    }
    return (
        <div>
            <ul>
                {listItem(10)}
            </ul> 
        </div>
    );
};

export default Test2;