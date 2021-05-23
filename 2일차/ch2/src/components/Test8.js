import React, { Component } from 'react';

class Test8 extends Component {
    //클래스 state ={}
    //this.setState({})
    //------------------------
    //함수형
    // const [state,setState] =useState(초기값)  (훅)

    //리액트는 항상 값이 유동적으로 변할때는 항상 state,setState 를 써야한다.
    

    state = {
        name:"공민철",
        age:0,
        addr:"주소"
    }
    click1 = () => {
        this.setState({
            name:"유재석",age:30,addr:"서울"
        })
    }
    click1 = () => {
        this.setState({
            name:"김나라",age:30,addr:"남원"
        })
    }
    render() {
        return (
            <div>
                <h1>
                이름: {this.state.name}/ 
                나이: {this.state.age}/
                주소: {this.state.addr}
                </h1>

                <button onClick={this.click1}>값변경</button>
                <button onClick={this.click2}>값변경</button>

                <button onClick={()=>this.setState({
                    name:"이효리",age:25,addr:"제주"
                })}>값변경</button>
                <button>값변경</button>
            </div>
        );
    }
}

export default Test8;
