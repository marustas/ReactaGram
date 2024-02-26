import React, { useState } from 'react'

const PostStats = ({post}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(post.likes);

  function handleLikeClick(){
    setLiked((liked)=>!liked)
    setCurrentLikes((likes)=>likes+1);
  }

  function handleSavedClick(){
    setSaved((saved)=>!saved)
  }

  return (
    <div className='flex justify-between z-20 items-center'>
        <div className='flex gap-2 mr-5'>
            <img className='cursor-pointer' onClick={handleLikeClick} src={`../assets/icons/${liked ? 'liked' : 'like'}.svg`} alt='like' width={20} height={20}/>
            <p className='small-medium lb:base-medium'>{currentLikes}</p>
        </div>
        <div className='flex gap-2'>
            <img className='cursor-pointer' onClick={handleSavedClick} src={`../assets/icons/${saved ? 'saved' : 'save'}.svg`} alt='like' width={20} height={20}/>
        </div>
    </div>
  )
}

export default PostStats