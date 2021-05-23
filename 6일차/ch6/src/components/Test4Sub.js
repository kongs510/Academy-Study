import React from 'react';
import PropTypes from 'prop-types';

// const Test4Sub = (props) => {
//     return (
//         <>
//         <ul>
//             <li>이름:{props.name}</li>
//             <li>나이:{props.age}</li>
//             <li>주소:{props.addr}</li>
//             <li>전화:{props.tel}</li>
//             <li>성별:{props.sex}</li>
//             <li>컬러:{props.color}</li>
//             <li>참여여부:{props.done=== true?"참여":"미참여"}</li>
//         </ul>   
//         </>
//     );
// };
// const Test4Sub = (props) => {
    const Test4Sub = (props) => {
        const {name,age,addr,tel,sex,color,done} =props
    return (
        <>
        <ul>
            <li>이름:{name}</li>
            <li>나이:{age}</li>
            <li>주소:{addr}</li>
            <li>전화:{tel}</li>
            <li>성별:{sex}</li>
            <li>컬러:<span style={{backgroundColor:color}}>{color}</span></li>
            <li>참여여부:{done=== true?"참여":"미참여"}</li>
        </ul>   
        </>
    );
};

export default Test4Sub;

Test4Sub.defaultProps = {
    name:"아무개",
    age:0,
    tel:"010-000-1111",
    sex:"남자/여자",
    done:false,
    color:"yellow",
    addr:"서울"
}

Test4Sub.propTypes  = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    addr: PropTypes.string
  };