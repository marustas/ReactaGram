import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate, formatTags } from '../services/utils'
import { useUser } from '../hooks/useUser';
import PostStats from './PostStats';

const PostCard = ({post}) => {
    // Need to format the user into a Context to follow DRY principlesf
    const {user} = useUser();
    const {username : currentUser} = user.user_metadata;
    const tags = formatTags(post.tags);

  return (
    <li className='post-card'>
        <div className='flex-between'>
            <div className='flex items-center gap-3'>
                <Link to={`/profile/${post.userID}`}>
                    <img className='rounded-full w-12 lg:h-12' alt='creator' src = "../assets/images/profile.png" />
                </Link>
                <div className='flex flex-col'>
                    <p className='base-medium lg:body-bold text-light-1'>{post.username}</p>
                    <div className='flex-center text-light-3 gap-2'>
                        <p className='subtle-semibold lg:small-regular'>{formatDate(post.created_at)}</p>
                        -
                        <p className='subtle-semibold lg:small-regular'>{post.location}</p>
                    </div>
                </div>
            </div>
            <Link className={post.username !== currentUser && 'hidden'} to ={`/update-post/${post.id}`}>
                <img alt='edit' width={25} height={25} src='../assets/icons/edit.svg'/>
            </Link>
        </div>
        <Link to = {`/posts/${post.id}`}>
            <div className='small-medium lg:base-medium py-5'>
                <p>{post.caption}</p>
                <ul className='flex gap-1 mt-2'>
                    {tags.map((tag) => (
                    <li className='text-light-3' key={tag}>
                        #{tag}
                    </li> 
                    ))}
                </ul>
            </div>
            <img className='post-card_img' src = {post.mediaUrl || '../assets/icons/profile-placeholder.svg'} alt='post'/>
        </Link>
        <PostStats post = {post}/>
    </li>
  )
}

export default PostCard