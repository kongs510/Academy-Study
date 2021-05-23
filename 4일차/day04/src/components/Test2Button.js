import React, { Component } from 'react';

class Test2Button extends Component {
    render() {
        const {onDel,onMod1} = this.props
        return (
            <>
                <p>
                    <button onClick={() => onDel(1)}>삭제1</button>
                    <button onClick={() => onDel(2)}>삭제2</button>
                    <button onClick={() => onDel(3)}>삭제3</button>
                </p>
                <p>
                    <button onClick={() => onMod1(6)}>수정1</button>
                    <button>수정2</button>
                </p>
            </>
        );
    }
}

export default Test2Button;
