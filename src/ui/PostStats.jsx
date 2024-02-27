import React, { useState } from 'react'
import { useLikePost } from '../hooks/useLikePost';
import { useUser } from '../hooks/useUser';

const PostStats = ({post}) => {
  const [saved, setSaved] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(post.likes);
  const {isLiking, likePost} = useLikePost();
  const {user} = useUser();
  const {username} = user.user_metadata;

  function checkHasLiked(likes, user){
    return likes?.includes(user);
  }

  function handleLikeClick(e) {
    e.stopPropagation();
    let newLikes = [...currentLikes];
    const hasLiked = newLikes.includes(username);
    if (hasLiked) {
      newLikes = newLikes.filter((like)=>like!==username)
    } else {
      newLikes.push(username);
    }
    setCurrentLikes(newLikes);
    likePost({id: post.id, likes: newLikes});
  }

  function handleSavedClick(){
    setSaved((saved)=>!saved);
  }

  return (
    <div className='flex justify-between z-20 items-center'>
        <div className='flex gap-2 mr-5'>
            <img className='cursor-pointer' onClick={handleLikeClick} src={`../assets/icons/${checkHasLiked(currentLikes,username) ? 'liked' : 'like'}.svg`} alt='like' width={20} height={20}/>
            <p className='small-medium lb:base-medium'>{currentLikes.length}</p>
        </div>
        <div className='flex gap-2'>
            <img className='cursor-pointer' onClick={handleSavedClick} src={`../assets/icons/${saved ? 'saved' : 'save'}.svg`} alt='like' width={20} height={20}/>
        </div>
    </div>
  )
}

export default PostStats