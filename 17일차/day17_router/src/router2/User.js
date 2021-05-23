import React from 'react';
import { useParams } from 'react-router';

const UserData={
    user1:{
        name:"홍길동",job:"기획자"
    },
    user2:{
        name:"유재석",job:"웹디"
    },
    user3:{
        name:"이효리",job:"웹 개발자"
    },
    user4:{
        name:"제시",job:"웹 프론트엔트 개발자"
    },
    user5:{
        name:"아이유",job:"웹 백엔드 개발자"
    },
    user6:{
        name:"아이유",job:"인공지능 개발자"
    }
}

const User = () => {
    const {username} = useParams()
    const profile=UserData[username]
    return (
        <div>
            {profile.name}/{profile.job}
        </div>
    );
};

export default User;