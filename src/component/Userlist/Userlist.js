import React from 'react';

const UserList = ({ users, deactivateUser }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className={`user ${user.active ? '' : 'inactive'}`}>
          <span>{user.email}</span>
          <button onClick={() => deactivateUser(user.email)}>Deactivate</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
