import React from 'react'

export default ({ users = [] }) => {
  return users.length > 0 ?
    (
      <ul>
        {users.map(user => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    ) : <div>There are no Users</div>
}