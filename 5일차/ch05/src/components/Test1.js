import React, { Component } from 'react';

class Test1 extends Component {
    state={
        count :1
    }
    increment1 = () => {
        const {count} = this.state
        this.setState({
            count:count+1
        })
    }   
    decrement1 = () => {
        const {count} = this.state
        this.setState({
            count:count-1
        })}
    increment2 = () => {
        this.setState((prevState) =>{
            return({
                count:prevState.count+1
            })
            })
            this.setState((state) =>{
                return({
                    count:state.count+1
                })
                })

    }
    render() {
      const {count} = this.state
        return (
            <div>
               <h2>숫자:{count}</h2>

               <button onClick={this.increment1}>증가</button> 
               <button onClick={this.decrement1}>감소</button> 
               <br/>
               <br/>
               <button onClick={this.increment2}>증가</button> 
               <button onClick={this.decrement2}>감소</button> 
            </div>
        );
    }
}

export default Test1;
