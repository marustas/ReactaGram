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
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              user.profileImage || "../assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">
                {user.name}
              </h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{user.username}
              </p>
            </div>
          </div>
        </div>
      </div>}
  </div>
  )
}

export default Profile