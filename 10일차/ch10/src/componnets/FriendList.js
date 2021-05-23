import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({friend,onRemove}) => {
    return (
        <ul>
            {
                friend.map(friend=> <FriendItem key={friend.id}  friend={friend} onRemove={onRemove} />)
            }
        </ul>
    );
};

export default FriendList;