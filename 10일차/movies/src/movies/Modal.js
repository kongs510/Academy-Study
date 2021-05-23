import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
const Modal = ({movieId,onClose}) => {
    return (
        <div>
            <div className="modal">
                <div className="bg"></div>
                <div className="popup">
                    <div>
                        <img src={movieId.thumbUrl} alt={movieId.movieNm}/>
                    </div>
                    <h3>영화제목:{movieId.movieNm}</h3>
                    <h4>감독:{movieId.director}</h4>
                    <h4>장르:{movieId.genre}</h4><hr/>
                    <h4>영화설명:{movieId.synop}</h4>
                    <p className="more" onClick={onClose}>
                        <AiOutlineCloseCircle/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;