import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser';
import LinkList from '../ui/LinkList';
import { sidebarLinks } from '../const';

const LeftBar = () => {
  const {user} = useUser();
  const {username} = user.user_metadata;
  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
        <Link to="/" className='items-center flex gap-3'>
          <img height={36} width={170} alt = "home" src = "../assets/images/logo.svg"/>
        </Link>
        <Link to={`/profile/${username}`} className='items-center flex gap-3'>
          <img className='h-14 w-14 rounded-full' alt = "profile" src = "../assets/images/profile.png"/>
          <div className='flex flex-col'>
          <p className='body-bold'>{username}</p>
          <p className='small-regular text-light-3'>@{username}</p>
        </div>
        </Link>
        <LinkList className="flex flex-col gap-6" links={sidebarLinks}/>
      </div>
    </nav>
  )
}

export default LeftBar