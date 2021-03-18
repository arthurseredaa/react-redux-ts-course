import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList = () => {
  const users = useTypedSelector(state => state.user.users);
  console.log(users);

  return (
    <div>
      UserList
    </div>
  )
};
