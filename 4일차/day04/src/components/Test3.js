import React, { Component } from 'react';

class Test3 extends Component {
    id=2
    no=2
    state ={
        data1:[{id:1}],
        data2:[{id:1,name:"유재석"}]
    }
    click1=() => {
        const {data1} = this.state
        this.setState({
            data1:data1.concat({id:this.id++})
        })
    }
    click2=() => {
        const {data2} = this.state
        this.setState({
            data2:data2.concat({no:this.no++,name:"강호동"+Math.floor(Math.random()*100)})
        })
    }
    render() {
        const{data1,data2} =this.state
        return (
            <div>
                <p>
                <button onClick={this.click1}>고유값1</button>
                <button onClick={this.click2}>고유값2</button>
                </p>
                <hr/>
                {data1.map(item => <p key={item.id}>{item.id}</p>)}
                <hr/>
                {data2.map(item => <p key={item.id}>{item.id}/</p>)}
            </div>
        );
    }
}

export default Test3;
