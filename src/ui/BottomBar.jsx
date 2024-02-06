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
          <Link className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2 transition`} key={link.label}  to = {link.route}>
            <img width={16} height={16} className={`${isActive && 'invert-white'}`} src = {link.imgURL} alt = {link.label}/>
            <p className='tiny-medium text-light-2'>{link.label}</p>
        </Link>
        )
      })}
    </section>
  )
}

export default BottomBar