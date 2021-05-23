import React, { useState } from 'react';
import "../utils/css/reset.css"
import "./Melon.css"
import music from "../utils/api/music"
import MelonList from './MelonList';
import MelonForm from './MelonForm';
import Modal from './Modal';
const Melon = () => {

    const[musics,setMusics]=useState(music)//출력용
    const[musics1,setMusics1]=useState(music)//검색용
    const [isActive, setIsActive] = useState(false);
    const [find, setFind] = useState(music[0]);

    const onSearch = (text) =>{
        // //검색
        // const newData = musics.filter(music=>music.title.indexOf(text) !==-1)
        // setMusics(newData)
        // //이상태까지는 한번은 검색됨 그러나 두번째부터는 안됨 
        // const newData = musics1.filter(music=>music.title.indexOf(text) !==-1) ㅑindexOf
        const newData = musics1.filter(music=>{    //정규식 대소문자 구별가능
            const re=new RegExp(text,"ig")
            return music.title.match(re)     
        })
        setMusics(newData)
        //이렇게 해야 검색이됨
    }

    const onLike=(id) =>{
        const newData = musics.map(music=>music.id ===id ?{...music,like:music.like+1,done:true}:music)
        setMusics(newData)
    }

    const onOpen=(id)=>{
        setIsActive(true)
        // setFind(musics[id-1])
        //filter =>[],find=>{}
        setFind(musics.find(music=>music.id===id))
    }

    const onClose = () =>{
        setIsActive(false)
    }
    return (
        <div className="Melon">
           <h2>Melon</h2> 
           <MelonForm onSearch={onSearch}/>
           <MelonList musics={musics} onLike={onLike} onOpen={onOpen}/>
           {
               isActive &&   <Modal find={find} onClose={onClose}/>
           }
         
        </div>
    );
};

export default Melon;