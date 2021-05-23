import React, { Component } from 'react';

class Test2 extends Component {
    no=2
    state = {
        data:[{no:1}]
    }
    onAdd = () => {
        const {data} = this.state     
        this.setState({
            // data:data.concat({no:this.no})
            data:[...data,{no:this.no++}]
        })
    }
    render() {
        const {data}=this.state
        return (
            <div>
                <h3>고유번호 처리,데이터추가</h3>
                <button onClick={this.onAdd}>추가</button>
                {
                    data.map( item=><p key={item.no}>
                            {item.no}
                    </p>)
                }
            </div>
        );
    }
}

export default Test2;
