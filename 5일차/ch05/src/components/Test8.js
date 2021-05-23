import React, { Component } from 'react';
import $, { data } from "jquery"
class Test8 extends Component {
    state={
        data:[
            {no:1,name:"홍길동"},
            {no:2,name:"kim"},
            {no:3,name:"so"},
            {no:4,name:"ra"},
            {no:5,name:"kong"},
            {no:6,name:"min"},
            {no:7,name:"cheol"},
            {no:8,name:"강호동"},
            {no:9,name:"이남길"},
            {no:9,name:"홍길동"},
            {no:10,name:"홍길동"},
        ]
    }

    componentDidMount() {
        let msg=""
        let $li = $('ul li')
        $("#text").keyup( function(){
            $li.hide()
            msg=$(this).val()
            let con =$li.find("span:contains("+msg+")")
            $(con).parent().show()
        })
    }
    render() {
        const {data} = this.state
        return (
            <div>
                <input type="text" id="text" />
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no} / <span>{item.name}</span>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test8;
