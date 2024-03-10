import React from 'react'
import Loader from '../ui/Loader';
import UsersList from '../ui/UsersList';

const AllUsers = () => {
  const {users, isLoading} = useUsers();
  return (
    <div className='user-container'>
      <h2 className='h3-bold md:h2-bold w-full'>All users</h2>
      {isLoading ? <Loader/> : <UsersList users = {users}/>}
    </div>
  )
}

export default AllUsers