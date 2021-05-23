import React from 'react';
import Numeral from 'numeral';
import { AiOutlineCaretDown,AiOutlineCaretUp,AiOutlineBulb } from "react-icons/ai";

const MovieItem = ({movie,onOver}) => {
    const {rank,movieNm,salesAmt,audiCnt,rankInten}=movie
    return (
        <tr onMouseOver={()=>onOver(rank)}> 
           <td>{rank}</td> 
           <td>{movieNm}</td> 
           <td>{Numeral(salesAmt).format(0,0)}</td> 
           <td>{Numeral(audiCnt).format(0,0)}</td> 
           <td>
               {rankInten > 0 && <AiOutlineCaretUp color="red"/>}
               {rankInten < 0 && <AiOutlineCaretDown color="blue" />}
               {rankInten === 0 && <AiOutlineBulb color="green"/>}
           </td> 
        </tr>
    );
};

export default MovieItem;