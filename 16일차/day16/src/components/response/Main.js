import React from 'react';
import GlobalStyle from '../styled/Global';
import Content1 from './Content1';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Content1/>       
        </div>
    );
};

export default Main;