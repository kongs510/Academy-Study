import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        text:''
    }
    //event
    change=(event)=>{
        const {value} = event.target
        this.setState({
            text: value
        })
    }
    render() {
        const {text} = this.state
        return (
                <div>
                <input type="text" onChange={this.onChange} />
                <h2> {text} </h2>
            </div>
        );
    }
}

export default Test4;
