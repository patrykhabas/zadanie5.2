import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import { parseJson } from '../utils/apiUtils';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers()
      .then(parseJson)
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div>
          <h3>{user.name}</h3>
          <p>E-mail{user.email}</p>
          <p>Company{user.company.name}</p>
        </div>
      ))}
    </div>
  );
};
