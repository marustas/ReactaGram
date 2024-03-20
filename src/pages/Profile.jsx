import React from 'react'
import {useParams} from 'react-router-dom';
import { useAnyUser } from '../hooks/useAnyUser';
import Loader from '../ui/Loader';

const Profile = () => {
    const {userID} = useParams();
    const {user, isLoading} = useAnyUser(userID);
  return (
    <div className='profile-container'>
      {isLoading ? <Loader/> : 
      <div className='profile_inner-container'>
        <img src = {user.profileImage || "../assets/icons/profile-placeholder.svg"} alt='profile' />
        <h2 className='h3-bold md:h2-bold w-full'>{user.name}</h2>
        <p className='small-regular text-light-3'>@{user.username}</p>
      </div>}
    </div>
  )
}

export default Profile