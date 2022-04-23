import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Test',
      image:
        'https://upload.wikimedia.org/wikipedia/zh/thumb/e/ed/Bart_Simpson.svg/1280px-Bart_Simpson.svg.png',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
