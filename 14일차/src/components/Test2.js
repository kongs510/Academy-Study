import React from 'react';
import "./Test2.scss"
const Test2 = () => {
    return (
        <div id="header">
            <div className="inner">

                <h1>로고</h1>
                <nav className="gnb">
                    <ul>
                        <li><a href="#">MainMenu1</a></li>
                        <li><a href="#">MainMenu2</a></li>
                        <li><a href="#">MainMenu3</a></li>
                        <li><a href="#">MainMenu4</a></li>
                        <li><a href="#">MainMenu5</a></li>
                        <li><a href="#">MainMenu6</a></li>
                    </ul>
                </nav>
                <ul className="util-menu">
                    <li><a href="">Login</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Test2;