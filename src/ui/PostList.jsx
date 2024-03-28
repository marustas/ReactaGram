import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'

const PostList = ({posts, showUser = true, showStats = true}) => {
  return (
    <ul className='grid-container'>
        {posts.map((post)=>(
        <li key={post.id} className='relative min-w-80 h-80'>
            <Link to={`/posts/${post.id}`} className='grid-post_link'>
                <img src={post.mediaUrl} alt='post' className='w-full h-full object-cover'/>
            </Link>
            <div className='grid-post_user'>
                {showUser && (
                <div className='flex items-center justify-start gap-2 flex-1'>
                    <img className='h-8 w-8 rounded-full' src={post.creatorUrl || '../assets/icons/profile-placeholder.svg'} alt='creator'/>
                    <p className='line-clamp-1'>{post.creator}</p>
                </div>
                )}
                {showStats && (<PostStats post={post}/>)}
            </div>
        </li>
        ))}
    </ul>
  )
}

export default PostList