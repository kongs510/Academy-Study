import React from 'react';

const FriendItem = ({friend,onRemove}) => {
    return (
        <li>
                   <p><img src={friend.image} alt="" /></p>
                   <div>
                       <strong>이름 : {friend.name}  </strong>
                       <span> 나이  : {friend.age}</span>
                       <button onClick={onRemove}>삭제</button>
                   </div>
               </li>
    );
};

export default FriendItem;