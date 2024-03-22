import React from 'react'
import {Link, useParams} from 'react-router-dom';
import { useAnyUser } from '../hooks/useAnyUser';
import Loader from '../ui/Loader';
import StatBlock from '../ui/StatBlock';
import { useUser } from '../hooks/useUser';

const Profile = () => {
    const {userID} = useParams();
    const {user, isLoading} = useAnyUser(userID);
    const {user: currentUser} = useUser();
    console.log(currentUser, userID);
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
            <div className='flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20'>
              <StatBlock value={0} label='Posts'/>
              <StatBlock value={0} label='Followers'/>
              <StatBlock value={0} label='Following'/>
            </div>
            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
              Your bio
            </p>
          </div>

          <div className="flex justify-center gap-4">
          <Link
                to={`/update-profile/${userID}`}
                className={currentUser.id !== userID ? "hidden" : 'h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg'}>
                <img
                  src={"../assets/icons/edit.svg"}
                  alt="edit"
                  width={20}
                  height={20}
                />
                <p className="flex whitespace-nowrap small-medium">
                  Edit Profile
                </p>
              </Link>
              <div className={`${currentUser.id === userID && "hidden"}`}>
              <button type="button" className="shad-button_primary px-8 rounded-md p-2">
                Follow
              </button>
            </div>
            </div>
        </div>
      </div>}
  </div>
  )
}

export default Profile