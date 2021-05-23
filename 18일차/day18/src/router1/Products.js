import React from 'react';
import data from './data'
import {  Link  } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <h1>운동화  제품 목록 </h1>
            {
                data.map( item => <article key={item.id}>
                    <Link to={`/products/${item.id}`}>
                    <h3>{item.name} </h3>
                    <p><img src={item.photo} alt={item.name} width="200"/> </p>
                    </Link>
                </article> )
            }
        </div>
    );
};

export default Products;