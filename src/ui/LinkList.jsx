import React from 'react'
import { Link } from 'react-router-dom'

const LinkList = ({links}) => {
  return (
    <ul>
        {links.map((link)=><li className='leftsidebar-link' key={link.label}>
            <Link className='flex gap-4 items-center p-4'  to = {link.route}>
              <img className='group-hover:invert-white' src = {link.imgURL} alt = {link.label}/>
              {link.label}
            </Link>
        </li>)}
    </ul>
  )
}

export default LinkList