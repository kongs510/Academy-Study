import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/modules/news';

const News = () => {
    const {users,loading,error} =useSelector(state=>state.news)
    const dispatch =useDispatch()

    useEffect( ()  => {
        dispatch( getUsers() )
    },[dispatch])

    return (
        <div>
        <h1>뉴스 불러오기</h1>  
        {
            users.map(item=><p key={item.id}>
        {item.id}   / {item.name}
            </p>)
        }
        </div>
    );
};

export default News;