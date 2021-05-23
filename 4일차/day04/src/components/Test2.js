/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Test2Button from './Test2Button';
import Test2Sub from './Test2Sub';

class Test2 extends Component {
    state ={
        data : [
          {no:1,name:"홍길동",age:20,addr:"서울",done:true},
          {no:2,name:"강호동",age:10,addr:"부산",done:false},
          {no:3,name:"유재석",age:30,addr:"서울",done:true},
          {no:4,name:"김나라",age:70,addr:"경기",done:false},
          {no:5,name:"김범수",age:70,addr:"서울",done:true},
          {no:6,name:"아이유",age:50,addr:"대구",done:false},
          {no:7,name:"이수근",age:20,addr:"울산",done:true},
          {no:8,name:"제시",age:40,addr:"울산",done:true},
          {no:9,name:"나나",age:50,addr:"울산",done:true},
        ]
      }

      onRemove = (num) => {
          const {data} = this.state
          this.setState({
              data:data.filter(item => item.no !==num)
          })
      }
      onMod1 = (id) => {
          const {data} = this.state
          this.setState({
              data:data.map(item => {
                  if(item.no === id){
                      return{
                          ...item,
                          name:"김우동",age:50,addr:"울산",done:false
                      }
                  }
                  return item
              })
          })
      }

    render() {
        const {data} = this.state
        return (
            <div>
                <Test2Button onDel={this.onRemove}
                            onMod1={this.onMod1}
                />
                <hr/>
                <Test2Sub data = {data} />
                {/* {data} 실제값 data =props */}
            </div>
        );
    }
}

export default Test2;
