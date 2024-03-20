import React from 'react'
import {useParams} from 'react-router-dom';
import { useAnyUser } from '../hooks/useAnyUser';
import Loader from '../ui/Loader';

const Profile = () => {
    const {userID} = useParams();
    const {user, isLoading} = useAnyUser(userID);
  return (
    <div>
      {isLoading ? <Loader/> : <>      <h2>Profile</h2>
        <p>{user.username}</p></>}
    </div>
  )
}

export default Profile