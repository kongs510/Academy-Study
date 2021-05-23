import React, { Component } from 'react';

class Test1 extends Component {
  //클래스 영역 
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
  onDel1 = () => {
    this.setState({
      data:this.state.data.filter( item =>item.no !== 1) //1번과 다르면 삭제해라
    })
  }
  //비구조 할당
  onDel2 = () => {
    const {data} = this.state
     this.setState({
      data:data.filter(item => item.no !==2)
    })
  }

  onDel3 = () => {
    const {data} = this.state
     this.setState({
      data:data.filter(item => item.no !==3)
    })
  }
  click1 =(num) => {
    const {data} =this.state
    this.setState({
      data:data.filter( item => item.no !== num)
    })
  }
  click2 = () => {
    const {data} = this.state
    this.setState({
        data:data.map(item => {
            if(item.no ===1){
                return{
           ...item,
          name:"김철수",
          age:100,
          addr:"우주",
          done:false
        }
      }
          // 같은것만 수정해라
        })
      })
  }
  // click3 = () => {
  //   this.setState({
  //     data:data.map(item.map(item =>{
  //      if(item.no ===2){
  //        return{
  //          ...item,
  //          name:"유재석",
  //          age:35,
  //          addr:"서울",
  //          done:false
  //        }
  //      }
  //      return item
  //     })
  //   })
  // }
  click4 = (num) => {
    const {data} = this.state
    this.setState({
      data:data.map(item => item.no === num ? {...item,name:"이승기",age:26,addr:"강원도",done:false}:item)
    })
  }

  render() {
    //삭제 할땐 필터 
    //추가는 concat
    const {data} = this.state
    return (
      <div>
        <p>
          <button onClick={this.onDel1}>삭제1</button>
          <button onClick={this.onDel2}>삭제2</button>
          <button onClick={this.onDel3}>삭제3</button>
        </p>
        <p>
          {/* 반드시 값을 넣으려면 함수를 넣어줘야한다. */}
          {/* <button onClick={this.click1(1)}>삭제1</button>  */}
          <button onClick={() =>this.click1(5)}>삭제2</button>
          <button onClick={() => this.click1(6)}>삭제3</button>
        </p>
        <p>
          <button onClick={this.click2}>삭제1</button>
          <button onClick={this.click3}>삭제2</button>
          <button onClick={() => this.click1(3)}>삭제3</button>
        </p>
        <hr/>
        {
          data.map(item => <p key={item.no}>
            {item.no} / {item.name} / {item.age} / {item.addr} / {item.done === true ? "참여":"미참여"}
          </p>)
        }
      </div>
    );
  }
}

export default Test1;