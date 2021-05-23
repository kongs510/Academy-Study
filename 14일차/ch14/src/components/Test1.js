import React from 'react';
import "./Test1.css"
import myStyle from "./Test1.module.css"
const Test1 = () => {
    return (
        <div>
        <h2>css Moudle</h2>
        <div className="wrap">
        <div className={myStyle.box}></div>
        <div className="box"></div>


        <div className="size bg"></div>
        <div className={`${myStyle.size} ${myStyle.bg}`}></div>
        <div className={`${myStyle.size} ${myStyle.bg}`}></div>
        <div className={`size ${myStyle.bg}`}></div>


        <div className={[myStyle.size, myStyle.bg].join(' ')}></div>
        <div className={["size", myStyle.bg].join(' ')}></div>

        <div className="mybox"></div>
        </div>
        </div>
    );
};

export default Test1;