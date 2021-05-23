import React from 'react';
import { useParams } from 'react-router';

const Front = ({data}) => {
    const{name}=useParams()
    return (
        <div>
            <h1>Front</h1>
            {data.filter(item=>item.title===name)
            .map((item,index)=>(
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.info}</p>
                </div>
            ))
            }
        </div>
    );
};

export default Front;