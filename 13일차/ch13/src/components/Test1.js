import React, { useEffect, useState } from 'react';
import './Test1.css'
import '../utils/css/reset.css'

const Test1 = () => {
    const [position , setPosition] = useState(0)

    const onScroll = ()  => {
        setPosition( window.scrollY )
        console.log( position )
    }
    useEffect( ()  => {
        window.addEventListener('scroll', onScroll)
        return() => {
            window.removeEventListener('scroll', onScroll)
        }
    })

    const pos1 = { backgroundPositionY: position / 2 }
    const pos2 = { backgroundPositionY: position / -5 }
    const tx1={transform:`translateX(${position * (-0.7)}px)`}
    const tx2={transform:`translateX(${position * (0.5)}px)`}
    const opa1={opacity:(position-1500)/50}
    const opa2={opacity:(position-1700)/50}
    const opa3={opacity:(position-1900)/50}
    const opa4={opacity:(position-2100)/50}

    return (
        <div className="wrap">
            <div className="bg bg1" style={pos1}>
                <h2>useEffect</h2>
            </div>
            <div className="bg bg2" style={pos2}>
                <h2>useEffect</h2>
            </div>
            <p className="txt tx1" style={tx1}>
                Lssdsdsdsjdksjk sdskdjskjdskjdks ssssssssssssssssssssssssssssssssssssssss
                sdjskdjskjdksjkdj sjdksjdksjksdksjdkjsdsssssssssssssssssssssss
                skdjskdjksdjksjdks;  skjdskajdkajdjkdjkssssssssssssss
            </p>
            <p className="txt tx2" style={tx2}>
                Lssdsdsdsjdksjk sdskdjskjdskjdks sssssssssssssssssssssssssss
                sdjskdjskjdksjkdj sjdksjdksjksdksjdkjsdssssssssssssssssssssssssssssssssss
                skdjskdjksdjksjdks;  skjdskajdkajdjkdjksssssssssssssss
            </p>
            <p className="op op1" style={opa1}>Lssdsdsdsjdksjk sdskdjskjdskjdks sssssssssssssssssssssssssss</p>
            <p className="op op2"style={opa2}>Lssdsdsdsjdksjk sdskdjskjdskjdks sssssssssssssssssssssssssss</p>
            <p className="op op3"style={opa3}>Lssdsdsdsjdksjk sdskdjskjdskjdks sssssssssssssssssssssssssss</p>
            <p className="op op4"style={opa4}>Lssdsdsdsjdksjk sdskdjskjdskjdks sssssssssssssssssssssssssss</p>
        </div>
    );
};

export default Test1;