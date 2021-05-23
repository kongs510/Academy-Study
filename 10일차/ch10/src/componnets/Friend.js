import React, { useRef, useState }  from 'react';
import FriendList from './FriendList';
import '../utils/css/reset.css';
import './style.css';
import FriendInput from './FriendInput';
import data from "../utils/api/list"
 

const Friend = () => {   
    const no = useRef(data.length+1)
    const [friend,setFriend]=useState(data)
    const [friendAll,setFriendAll]=useState(data)
    const [isView, setIsView] = useState(false)

    const onAdd=(form)=> {
        form.id=no.current++
        //concat , [...xxx,{}]
        //friend.추가[{id:6,name:나나,age:20,image:url.}]
        // setFriend(friend.concat(form))
        setFriend([...friend,form])
    }
    const onDel=()=>{
        setFriend([])
    }
    const onRestore=()=>{
        setFriend(friendAll)
    }

    const onRemove=(id)=>{
        // alert("id")
        setFriend(friend.filter(friend=>friend.id !==id))
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원 : {friend.length}  </h1>
            <span className="chk"><input type="checkbox" checked={isView} onChange={e=>setIsView(e.target.checked)}/>추가 {isView ? "비활성":"활성"}</span>

            <FriendList friend={friend} onRemove={onRemove}/>
            <p  className="btn"><button onClick={onDel}>모두 삭제</button>
            <button onClick={onRestore}> 초기 복구 </button>
            </p>
            
            {
                isView &&  <FriendInput onAdd={onAdd}/>
            }          
        </div>
    );
};

export default Friend;