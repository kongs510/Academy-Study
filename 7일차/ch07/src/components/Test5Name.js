import React from 'react';

const Test5Name = ({name,onName}) => {
    return (
        <div>
               <h3>Name</h3>
            <p>
                <label htmlFor="name">이름은?</label>
                <input type="text" value={name} onChange={onName} />
                <span style={{marginLeft:15}}>
                    {onName}
                </span>
            </p>
        </div>
    );
};

export default Test5Name;