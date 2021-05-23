import React from 'react';

// const Test3Sub1 = (props) => {
//     return (
//         <div>
//             <h3>이름:{props.name}</h3>
//             <h3>나이:{props.age}</h3>
//             <hr/>
//         </div>
//     );
// };

// const Test3Sub2 = (props) => {
//     const {name,age} =props
//     return (
//         <div>
//             <h3>이름:{name} / ({typeof name})</h3>
//             <h3>나이:{age}/ ({typeof age})</h3>
//             <hr/>
//         </div>
//     );
// };
const Test3Sub = ({name,age}) => {
    return (
        <div>
            <h3>이름:{name} / ({typeof name})</h3>
            <h3>나이:{age}/ ({typeof age})</h3>
            <hr/>
        </div>
    );
};

const Test3 = () => {
    const data1 = {name:"강아지",age:3}
    const data2 = {name:"고양이",age:5}
    return (
        <div>
            <Test3Sub name="유재석" age={20} />
            <Test3Sub name="강호동" age={30} />
            <Test3Sub name={data1.name} age={data1.age} />
            <Test3Sub {...data2} />
        </div>
    );
};

export default Test3;