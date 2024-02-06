import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { bottomBarLinks } from '../const';

const BottomBar = () => {
  const {pathname} = useLocation();
  return (
    <section className='bottom-bar'>
      {bottomBarLinks.map((link) => {
        const isActive = pathname === link.route;
        return(
          <li className={`bottombar-link group ${isActive && 'bg-primary-500'}`} key={link.label}>
            <Link className='flex gap-4 items-center p-4'  to = {link.route}>
            <img className={`group-hover:invert-white ${isActive && 'invert-white'}`} src = {link.imgURL} alt = {link.label}/>
          {link.label}
            </Link>
          </li>
        )
      })}
    </section>
  )
}

export default BottomBar