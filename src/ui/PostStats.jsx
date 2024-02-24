import React from 'react'

const PostStats = ({post}) => {
  return (
    <div className='flex justify-between z-20 items-center'>
        <div className='flex gap-2 mr-5'>
            <img className='cursor-pointer' onClick={()=>{}} src='..assets/icons/liked.svg' alt='like' width={20} height={20}/>
            <p className='small-medium lb:base-medium'>{post.likes}</p>
        </div>
        <div className='flex gap-2'>
            <img className='cursor-pointer' onClick={()=>{}} src='..assets/icons/saved.svg' alt='like' width={20} height={20}/>
        </div>
    </div>
  )
}

export default PostStats