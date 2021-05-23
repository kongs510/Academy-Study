import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const V1 = () => {
    const [data, setData] = useState([
        {id:1,name:"강호동",addr:"서울시",tel:"010-123-1234"},
        {id:2,name:"공호동",addr:"경기도",tel:"010-123-1234"},
        {id:3,name:"이호동",addr:"남원시",tel:"010-123-1234"},
        {id:4,name:"김호동",addr:"전북시",tel:"010-123-1234"}
    ]);
    return (
        <div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map(item=><tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.addr}</td>
                <td>{item.tel}</td>

            </tr>)
        }
        </tbody>
      </Table>
    </div>
    );
};

export default V1;