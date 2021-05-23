import React, { useState } from 'react';
import Test3Result from './Test3Result';

const Test3 = () => {
    const [ color , setColor ] = useState('')
    const [ movie , setMovie ] = useState('')

    const onColor = (e)  => {
        setColor( e.target.value)
    }
    const onMovie = (e)  => {
        setMovie( e.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 컬러는?</h2>
            <p>
                <input type="text" onChange={onColor} />
                <br/>
                <span>red, tomato, pink, green </span>
            </p>
            <h2> 당신이 좋아하는 영화는?</h2>
            <p>
                <label>미나리</label>
                <input type="radio" value="미나리" name="movie" onChange={onMovie} />
            </p>
            <p>
                <label>뉴에이지</label>
                <input type="radio" value="뉴에이지" name="movie" onChange={onMovie} />
            </p>
            <p>
                <label>더스파이</label>
                <input type="radio" value="더스파이" name="movie" onChange={onMovie} />
            </p>
            <p>
                <label>콩순이</label>
                <input type="radio" value="콩순이" name="movie" onChange={onMovie} />
            </p>

            <Test3Result  color={color} movie={movie} />
        </div>
    );
};

export default Test3;