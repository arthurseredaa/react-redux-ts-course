import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector(state => state.user),
    {fetchUsers} = useActions();

  useEffect(() => {
    fetchUsers()
  }, []);

  if(loading) {
    return <p>Loading...</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div>
      UserList
        {
          users.map(user => <p key={user.id}>{user.name}</p>)
        }
    </div>
  )
};
