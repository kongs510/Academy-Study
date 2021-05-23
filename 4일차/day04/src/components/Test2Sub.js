import React, { Component } from 'react';

class Test2Sub extends Component {
    render(){
        const {data} = this.props
        return (
            <>
             {
                 data.map(item => <p key={item.no}>
                     {item.no} / {item.name} / {item.age} / {item.addr} / {item.done === true?"참여":"미참여" }
                 </p>)
             }   
            </>
        );
    }
}

export default Test2Sub;
