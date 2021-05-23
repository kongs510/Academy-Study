import React, { Component } from 'react';

class Test4 extends Component {
    nameRef = React.createRef()
    state = {
        name:"",
        age:"",
        addr:""
    }

    onchange1 = (e) => {
        this.setState({
            'name' : e.target.value
        })
    }
    onchange2 = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onchange3 = (e) => {
        this.setState({
            addr:e.target.value
        })
    }
    onReset = (e) =>{
        this.setState({
            name:"",
            age:"",
            addr:""
        })
        this.nameRef.current.focus()
    }


    render() {
        const {name,age,addr}=this.state
        return (
            <div>
                <input type="text" onChange={this.onchange1} value={name} ref={this.nameRef} name="name" />
                <input type="text" onChange={this.onchange2} value={age}  name="age" />
                <input type="text" onChange={this.onchange3} value={addr} name="addr" />
                <button onClick={this.onReset}>초기화</button>
                <hr/>
                <p>이름:{name}</p>
                <p>나이:{age}</p>
                <p>주소:{addr}</p>
            </div>
        );
    }
}

export default Test4;
