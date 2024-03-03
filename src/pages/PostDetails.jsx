import React from 'react'
import { usePost } from '../hooks/usePost'
import Loader from '../ui/Loader';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from '../services/utils';

const PostDetails = () => {
    const {post, isPostLoading} = usePost();

  return (
    <div className='psot_details-container'>
        {isPostLoading ? <Loader/> : 
        (<div className='post_details-card'>
           <img className='post_details-img' alt='post' src={post.mediaUrl} />
           <div className='psot_detail-info'>
                <Link to={`/profile/${post?.userID}`}>
                    <img className='rounded-full w-12 lg:h-12' alt='creator' src = "../assets/images/profile.png" />
                </Link>
                <div className='flex flex-col'>
                    <p className='base-medium lg:body-bold text-light-1'>{post?.username}</p>
                    <div className='flex-center text-light-3 gap-2'>
                        <p className='subtle-semibold lg:small-regular'>{formatDate(post?.created_at)}</p>
                        -
                        <p className='subtle-semibold lg:small-regular'>{post?.location}</p>
                    </div>
                </div>
            </div>
         </div>) }
    </div>
  )
}

export default PostDetails