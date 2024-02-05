import React from 'react'
import { useUser } from '../hooks/useUser'

const Profile = () => {
    const {user} = useUser();
    const {username} = user.user_metadata;
  return (
    <div>
        <p>{username}</p>
    </div>
  )
}

export default Profile