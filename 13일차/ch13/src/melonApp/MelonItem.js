import React from 'react';
import { FcLike,FcFilmReel,FcDown,FcUp,FcMinus,FcLikePlaceholder } from "react-icons/fc";
// import { IconName } from "react-icons/ai";
import Numeral from "numeral";

const MelonItem = ({music,onLike,onOpen}) => {
    const {rank,id,title,singer,poster,state,like,album,done}=music
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt="" width="50"/>
                <p>
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={()=>onLike(id)}>{
                    done? <FcLike/>:<FcLikePlaceholder/>}</i>
                {Numeral(like).format(0,0)}
            </td>
            <td><i onClick={() =>onOpen(id)}><FcFilmReel/></i></td>
            <td>
                {state ==="상승" && <i><FcUp/></i>}
                {state ==="하강" && <i><FcDown/></i>}
                {state ==="유지" && <i><FcMinus/></i>}
            </td>
            <td></td>
        </tr>
    );
};

export default MelonItem;