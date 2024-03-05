import React from 'react'
import { Link, useParams } from 'react-router-dom';

import { usePost } from '../hooks/usePost'
import { useUser } from '../hooks/useUser';
import Loader from '../ui/Loader';

import { formatDate, formatTags } from '../services/utils';
import PostStats from '../ui/PostStats';
import Modal from '../ui/Modal';
import ConfirmDelete from '../ui/ConfirmDelete';

const PostDetails = () => {
    const {post, isPostLoading} = usePost();
    const {id} = useParams();
    const {user} = useUser();

    function handleDeletePost(){

    }

  return (
    <div className='psot_details-container'>
        {isPostLoading ? <Loader/> : 
        (<div className='post_details-card'>
           <img className='post_details-img' alt='post' src={post.mediaUrl} />
           <div className='post_details-info'>
                <div className='flex-between w-full'>
                    <Link className='flex items-center gap-3' to={`/profile/${post?.userID}`}>
                        <img className='rounded-full w-8 h-8 lg:h-12 lg:w-12' alt='creator' src = "../assets/images/profile.png" />
                        <div className='flex flex-col'>
                            <p className='base-medium lg:body-bold text-light-1'>{post?.username}</p>
                            <div className='flex-center text-light-3 gap-2'>
                                <p className='subtle-semibold lg:small-regular'>{formatDate(post?.created_at)}</p>
                                -
                                <p className='subtle-semibold lg:small-regular'>{post?.location}</p>
                            </div>
                        </div>
                    </Link>
                    <div className='flex-center gap-4'>
                        <Link className={`${user.user_metadata.username !== post.username && 'hidden'}`} to={`/update-post/${id}`}>
                            <img width={22} height={22} alt='edit' src='../public/assets/icons/edit.svg'/>
                        </Link>
                        <Modal>
                            <Modal.Open opens='delete-post'>
                                <button className={`ghot_details-delete_btn ${user.user_metadata.username !== post.username && 'hidden'}`}>
                                    <img idth={24} height={24}  alt='delete' src='../public/assets/icons/delete.svg'/>
                                </button>
                            </Modal.Open>
                            <Modal.Window name='delete-post'>
                                <ConfirmDelete onConfirm = {handleDeletePost}/>
                            </Modal.Window>
                        </Modal>
                    </div>
                </div>
                <hr className='border border-dark-4/80 w-full'/>
                <div className='flex flex-col flex-1 w-full small-medium lg:base-regular'>
                    <p>{post?.caption}</p>
                    <ul className='flex gap-1 mt-2'>
                        {formatTags(post.tags).map((tag) => (
                        <li className='text-light-3 small-regular' key={tag}>
                            #{tag}
                        </li> 
                        ))}
                    </ul> 
                </div>
                <div className='w-full'>
                    <PostStats post={post}/>
                </div>
            </div>
         </div>) }
    </div>
  )
}

export default PostDetails