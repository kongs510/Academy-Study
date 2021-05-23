import React, { Component } from 'react';

class Test7 extends Component {
    constructor(props){
        super(props)
        //state,이벤트선언
        this.state = {name:""}
        this.handleClick=this.handleClick.bind(this)
        console.log("1.constructor")
    }
    handleClick = () =>{
        this.setState({
            name:"홍길동"
        })
    }
    componentDidMount() {
        console.log("3.componentDidMount")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        console.log("4.componentDidUpdate")
    }
    render() {
        const{name} =this.state
        console.log("2.render")
        return (
            <div>
                <button onClick={this.handleClick}>이름변경</button>
                <h2>이름:{name}</h2>
            </div>
        );
    }
}

export default Test7;
