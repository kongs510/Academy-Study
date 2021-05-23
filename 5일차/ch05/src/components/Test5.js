import React, { Component } from 'react';

class Test5 extends Component {
    id=1
    idRef=React.createRef()
    state = {
        userid:"",
        userpw:"",
        data:[]
    }

    change1 = (e) => {
        const {value,name} =e.target
        this.setState({
            [name]:value
        })
    }
    change2 = (e) => {
        const {value} =e.target
        this.setState({
            userpw:value
        })
    }
    //concat 아나 스프레드 연산자 이용해서 데이터추가
    //키와 값이 같다면 생략가능
    onAdd = () => {
        const {data,userid,userpw} =this.state
        this.setState({
            // data:data.concat({no:this.id, userid:userid,userpw:userpw })
            // data:data.concat({no:this.id++, userid,userpw }),
            data:[...data,{no:this.id++, userid, userpw}],
            userid:"",
            usrpw:""
        })
        this.idRef.current.focus()
    }

    render() {
        const {data, userid, userpw} = this.state
        return (
            <div>
                <p>
                    <input type="text" ref={this.idRef} onChange={this.change1} name="userid" />
                    <input type="text" onChange={this.change1}  name="userpw" />
                    <button onClick={this.onAdd}>추가</button>
                </p>
                <br/>
                <br/>
                {
                    data.map( item => <p key={item.no}>
                        {item.no} / {item.userid} / {item.userpw}
                       
                    </p>)
                }
            </div>
        );
    }
}

export default Test5;
