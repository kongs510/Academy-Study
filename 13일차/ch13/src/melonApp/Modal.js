import React from 'react';
import "./Modal.css"
import { AiOutlineCloseCircle } from "react-icons/ai";
const Modal = ({find,onClose}) => {
    const {title,singer,key} =find
    return (
        <div className="Modal">
            <div className="bg"></div>
            <div className="popup">
                <div>
                <iframe src={`https://www.youtube.com/embed/${key}`} title="YouTube video player" frameborder="0"></iframe>
                </div>
                <h2>곡:{title}</h2>
            <p>가수:{singer}</p>
            <span>
                <i onClick={onClose}><AiOutlineCloseCircle/></i>
            </span>
            </div>
        </div>
    );
};

export default Modal;