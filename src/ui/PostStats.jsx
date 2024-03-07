import React, { useState } from 'react'
import { useLikePost } from '../hooks/useLikePost';
import { useUser } from '../hooks/useUser';
import { useSavePost } from '../hooks/useSavePost';

const PostStats = ({post}) => {
  const [saved, setSaved] = useState(post.saved);
  const [currentLikes, setCurrentLikes] = useState(post.likes);
  const {likePost} = useLikePost();
  const {savePost} = useSavePost();
  const {user} = useUser();
  const {id} = user;

  function checkHasLiked(likes, user){
    return likes?.includes(user);
  }

  function checkHasSaved(saved, user){
    return saved?.includes(user);
  }

  function handleLikeClick(e) {
    e.stopPropagation();
    let newLikes = [...currentLikes];
    const hasLiked = newLikes.includes(id);
    if (hasLiked) {
      newLikes = newLikes.filter((like)=>like!==id);
    } else {
      newLikes.push(id);
    }
    setCurrentLikes(newLikes);
    likePost({id: post.id, likes: newLikes});
  }

  function handleSavedClick(e){
    e.stopPropagation();

    let newSaved = [...saved];
    const hasSaved = newSaved.includes(id);
    if(hasSaved){
      newSaved = newSaved.filter((save)=>save!==id);
    } else {
      newSaved.push(id);
    }

    setSaved(newSaved);
    savePost({id: post.id, saved: newSaved});
  }

  return (
    <div className='flex justify-between z-20 items-center'>
        <div className='flex gap-2 mr-5'>
            <img className='cursor-pointer' onClick={handleLikeClick} src={`../assets/icons/${checkHasLiked(currentLikes, id) ? 'liked' : 'like'}.svg`} alt='like' width={20} height={20}/>
            <p className='small-medium lb:base-medium'>{currentLikes.length}</p>
        </div>
        <div className='flex gap-2'>
            <img className='cursor-pointer' onClick={handleSavedClick} src={`../assets/icons/${checkHasSaved(saved, id) ? 'saved' : 'save'}.svg`} alt='like' width={20} height={20}/>
        </div>
    </div>
  )
}

export default PostStats