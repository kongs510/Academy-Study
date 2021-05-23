import React from 'react';
import { Link, Route } from 'react-router-dom';
import User from './User';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <ul>
                <li><Link to="/profile/user1">강호동</Link></li>
                <li><Link to="/profile/user2">유재석</Link></li>
                <li><Link to="/profile/user3">이효리</Link></li>
                <li><Link to="/profile/user4">제시</Link></li>
                <li><Link to="/profile/user5">아이유</Link></li>
                <li><Link to="/profile/user6">김태희</Link></li>
            </ul>
            <hr/>
            <Route path="/profile/:username"><User/></Route>
        </div>
    );
};

export default Profile;