import React from 'react';
import ItemUser from './ItemUser';
const ListUser = ({users,onRemove,onEdit}) => {
    return (
        <div>
          <h2 className="users">고객리스트</h2>
          <table>
              <colgroup>
                <col className="name"/>
                <col className="addr"/>
                <col className="list"/>
              </colgroup>
              <thead>
                  <tr>
                      <th>이름</th>
                      <th>주소</th>
                      <th>관리</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map(
                          user=><ItemUser key={user.id} user={user} onRemove={onRemove} onEdit={onEdit}/>
                      )
                  }
              </tbody>
          </table>
        </div>
    );
};

export default ListUser;