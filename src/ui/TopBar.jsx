import React from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from '../hooks/useSignOut';
import { useUser } from '../hooks/useUser';
import { useAnyUser } from '../hooks/useAnyUser';

const TopBar = () => {
  const {isSigningOut, signOut} = useSignOut();
  const {user} = useUser();
  const {username} = user.user_metadata;
  const {user: anyUser} = useAnyUser(user.id);

  return (
    <section className='topbar'>
        <div className='flex-between py-4 px-5'>
            <Link to="/" className='items-center flex gap-3'>
                <img height={325} width={130} alt = "logo" src = "../assets/images/logo.svg"/>
            </Link>
            <div className='flex gap-4'>
              <button disabled={isSigningOut} onClick={signOut} className='w-7 py-2 shad-button_ghost'>
                <img height={325} width={130} alt = "logout" src = "../assets/icons/logout.svg"/>
              </button>
              <Link className='flex-center gap-3' to ={`/profile/${user.id}`}>
                <img className='h-8 w-8 rounded-full' alt={username} src = {anyUser?.profileImage || "../assets/icons/profile-placeholder.svg"}/>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default TopBar