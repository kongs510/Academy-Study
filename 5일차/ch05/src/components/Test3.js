import React, { Component } from 'react';

class Test3 extends Component {
    state={
        text:''
    }
    change=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    render() {
        const {text} =this.state

        return (
            <div>
               <input type="text" onChange={this.change} /> 
               <h2>text:{text}</h2>
            </div>
        );
    }
}

export default Test3;
