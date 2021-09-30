import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const MemberDetail = () => {
    const { memberId } = useParams()
    const [ member , setMember ] = useState({})
    const history  = useHistory()

    const style = {
        border:'1px solid tomato' ,
        margin:15 ,
        padding:15 ,
        broderRadius:15
    }

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`
        fetch( url )
        .then( res => res.json() )
        .then( res => setMember( res ))
    },[])

    const {  name, email , phone , website  } = member 

    const onBack = ()  => {
        history.push('/')
    }

    return (
        <div style={style}>
            <h2> 멤버세부 내용 : no { memberId } </h2>
            <h3> 이름 : {name} </h3>
            <h3> 이메일 : {email} </h3>
            <h3> 전화번호 : {phone} </h3>
            <h3> 웹사이트 : {website} </h3>
            <button onClick={ onBack }> 이전 </button>
        </div>
    );
};

export default MemberDetail;