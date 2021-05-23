import React, { Component } from 'react';

class Test6 extends Component {
    no =1 
    textRef=React.createRef()

    state = {
        data:[],
        text:""
    }
    onAdd = (e) => {
        e.preventDefault()
        const {data,text} = this.state
        this.setState({
            data:data.concat({no:this.no++,text}),
            text:""
        })
        this.textRef.current.focus()
    }
    change = (e) => {
        const {value} = e.target
        this.setState({
            text:value
        })
    }
    onRemove = (id) => {
        const {data} =this.state
        this.setState({
            data: data.filter(item => item.no !== id)
        })
    }
    render() {
        const {data,text} = this.state
        return (
            <div>
                <form onSubmit={this.onAdd}>
                    <input type="text" onChange={this.change} value={text} ref={this.textRef} />
                    <button type="submit">추가</button>
                </form>
                <p>출력:{text}</p>
                <ul>
                    {
                        data.map(item =><li key={item.no}>
                            {item.no} / {item.text}
                            <button onClick={() => this.onRemove(item.no)}>삭제</button>
                        </li> )
                    }
                </ul>
            </div>
        );
    }
}

export default Test6;
