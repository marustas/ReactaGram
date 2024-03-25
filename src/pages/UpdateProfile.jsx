import React from 'react';
import {useParams} from 'react-router-dom';
import ProfileForm from '../ui/ProfileForm';
import { useAnyUser } from '../hooks/useAnyUser';
import Loader from '../ui/Loader';

const UpdateProfile = () => {
  const {userID} = useParams();
  const {user, isLoading} = useAnyUser(userID);
  if(isLoading) return <Loader/>;
  
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
          <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
              <img width={36} height={36} alt="add" src='../assets/icons/add-post.svg'/>
              <h2 className='text-left h3-bold md:h2-bold w-full'>Update Profile </h2>
          </div>
          <ProfileForm profile={user} action = 'update'/>
      </div>
    </div>
  )
}

export default UpdateProfile