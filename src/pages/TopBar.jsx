import React from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from '../hooks/useSignOut';


const TopBar = () => {
  const {isSigningOut, signOut} = useSignOut();
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
              <Link to ="/profile"></Link>
            </div>
        </div>
    </section>
  )
}

export default TopBar