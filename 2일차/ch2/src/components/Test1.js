import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        return (
            <div>
                <h1>JSX문법</h1>
                <p>한줄이상일 경우 div로 묶어준다</p>
                <p>반드시 다는 태그가 존재하야 한다.</p>
                <p>빈태그가 있어도 반드시 / 닫아준다.</p>
                <hr/>
                <br/>
                <input type="text" />
            </div>
        );
    }
}

export default Test1;
