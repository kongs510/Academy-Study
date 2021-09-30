import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import data from './data'

const ProductDetail = () => {
    const { productId }  = useParams()
    const history  = useHistory() 
    const pro = data.find( item => item.id === productId)
    const go = ()  => {
        history.push('/products')
    }
    return (
        <div>
            <h2> 운동화 상세 페이지 </h2>
            <h3> {pro.name} - 가격 : ${ pro.price } </h3>
            <p><img src={pro.photo} alt={pro.name} width="500" /></p>
            <p> 제품설명 : { pro.description } </p>
            <button onClick={ go }>제품목록</button>
        </div>
    );
};

export default ProductDetail;