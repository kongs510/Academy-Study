import React, { Component } from 'react';

class Test7 extends Component {
    //클래스 영역
    click1 = () => {
        alert("연습")
    }
    click2 = () => {
        alert("연습")
    }
    render() {
        return (
            <div>
                <button onClick={this.click1}>Click1</button>
                <button Click={this.click2}>Click2</button>
                <button onClick={ () => alert("연습")}>Click3</button>
                <button onClick={
                    () =>{
                        alert("알람1")
                        alert("알람2")
                        alert("알람3")
                    }
                }>Click4</button>
            </div>
        );
    }
}

export default Test7;
