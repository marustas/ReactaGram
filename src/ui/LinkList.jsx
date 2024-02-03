import React from 'react'
import { Link } from 'react-router-dom'

const LinkList = ({links}) => {
  return (
    <ul>
        {links.map((link)=><li key={link.label}>
            <Link className='leftsidebar-link' to = {link.route}>{link.label}</Link>
        </li>)}
    </ul>
  )
}

export default LinkList