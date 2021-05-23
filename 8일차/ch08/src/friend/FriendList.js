import React from 'react';

const FriendList = ({data}) => {
    return (
            <ul>
                {
                    data.map( item => <li key={item.id}>
                        <p>
                            <img src={item.image} alt="" />
                        </p>
                        <div>
                            <strong>이름:{item.name}</strong>
                            <span>나이:{item.age}</span>
                        </div>
                    </li>)
                }
            </ul>
    );
};

export default FriendList;