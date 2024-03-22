import React, { useEffect } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { useUser } from '../hooks/useUser';
import { sidebarLinks } from '../const';
import { useSignOut } from '../hooks/useSignOut';
import { useEnlistUser } from '../hooks/useEnlistUser';

const LeftBar = () => {
  const {user} = useUser();
  const {enlist} = useEnlistUser();
  const {username, name} = user.user_metadata;
  const {pathname} = useLocation();
  const {isSigningOut, signOut} = useSignOut();

  useEffect(function(){
    enlist({username, name})
  },[enlist, username, name])
  
  return (
    <nav className='leftsidebar gap-20'>
      <div className='flex flex-col gap-11'>
        <Link to="/" className='items-center flex gap-3'>
          <img height={36} width={170} alt = "home" src = "../assets/images/logo.svg"/>
        </Link>
        <Link to={`/profile/${user.id}`} className='items-center flex gap-3'>
          <img className='h-14 w-14 rounded-full' alt = "profile" src = "../assets/images/profile.png"/>
          <div className='flex flex-col'>
          <p className='body-bold'>{name}</p>
          <p className='small-regular text-light-3'>@{username}</p>
        </div>
        </Link>
        
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;
          return(
          <li className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`} key={link.label}>
              <NavLink className='flex gap-4 items-center p-4' to = {link.route}>
                <img className={`group-hover:invert-white ${isActive && 'invert-white'}`} src = {link.imgURL} alt = {link.label}/>
                {link.label}
              </NavLink>
          </li>
          )
        })}
        </ul>
      </div>
      <button disabled={isSigningOut} onClick={signOut} className='px-4 shad-button_ghost'>
        <img alt = "logout" src = "../assets/icons/logout.svg"/>
        <p className='small-medium lg:base-medium'>Logout</p>
      </button>
    </nav>
  )
}

export default LeftBar