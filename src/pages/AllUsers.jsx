import React from 'react'

import { useUsers } from '../hooks/useUsers';
import { useUser } from '../hooks/useUser';
import Loader from '../ui/Loader';
import UserCard from '../ui/UserCard';

const AllUsers = () => {
  const {users, isLoading} = useUsers();
  const {user: currentUser} = useUser();
  const filteredUsers = users?.filter((user)=>user.id !== currentUser?.id);

  return (
     <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="user-grid">
            {filteredUsers?.map((user) => (
              <li key={user?.id} className="flex-1 min-w-[200px] w-full  ">
                <UserCard user={user} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default AllUsers