import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Member = ({item}) => {
    const { id , name , email } = item 
    const history  = useHistory()

    const style = {
        border:'1px solid tomato' , padding:15 , margin:15,
        broderRadius:15
    }
    const go = ()  => {
        const url = `/member/${id}`
        history.push( url )
    }
    return (
        <div style={style}>
            <p> ID:{id} </p>
            <h4> 이름 : { name } </h4>
            <p> 이메일 : { email } </p>
            <p> <Link to={`/member/${id}`}>자세히보기</Link> </p>
            <button onClick={ go }> 상세페이지이동 </button>
        </div>
    );
};

export default Member;