import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
  return (
    <li className='post-card'>
        <div className='flex-between'>
            <div className='flex items-center gap-3'>
                <Link to={`/profile/${post.userID}`}>
                    <img className='rounded-full w-12 lg:h-12' alt='creator' src = {post.mediaUrl} />
                </Link>
                <div className='flex flex-col'>
                    <p className='base-medium lg:body-bold text-light-1'>{post.username}</p>
                    <div className='flex-center text-light-3 gap-2'>
                        <p className='subtle-semibold lg:small-regular'>{post.created_at}</p>
                        -
                        <p className='subtle-semibold lg:small-regular'>{post.location}</p>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default PostCard