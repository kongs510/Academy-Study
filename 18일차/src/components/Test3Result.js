import React, { useMemo } from 'react';

const getColor = (color)  => {
     console.log( 'getColor' )
     switch( color ) {
         case 'red': return '빨강';
         case 'tomato': return '토마토';
         case 'green': return '녹색';
         case 'pink': return '분홍';
         default : return '없음'
     }
}
const getMovie = (movie)  => {
    console.log('getMovie')
    switch( movie ) {
        case '미나리': return '어느 한국 가족의 원더풀한 이야기';
        case '뉴에이지': return '인류 최초 가족들의 새로운 세상을 향한 스펙터클한 모험이 시작된다!';
        case '더스파이': return '전운이 감도는 1960년 냉전시대, 소련 군사정보국 ‘올레크 대령’은';
        case '콩순이': return '진짜 진짜 이번이 마지막! 이것만 사주세요홍';        
    }
}

const Test3Result = ({color, movie}) => {
    const colorInfo = useMemo(() => getColor(color),[color])
    const movieInfo = useMemo(() => getMovie(movie),[movie] )
    // const colorInfo = useMemo(() => getColor(color),[color])
    // const movieInfo = useMemo(() => getMovie(movie),[movie] )

    return (
        <div>
            <h3>
                내가 좋아하는 컬리는 { color } /{colorInfo}이고
            </h3>
            <h3>
                내가 좋아하는 영화는 { movie } / {movieInfo} 이다
            </h3>

        </div>
    );
};

export default Test3Result;