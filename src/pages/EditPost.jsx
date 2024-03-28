import React from 'react';

import { usePost } from '../hooks/usePost';
import PostForm from '../ui/forms/PostForm';
import Loader from '../ui/Loader';

const EditPost = () => {
  const {isPostLoading, post} = usePost();
  // REMEMBER THAT REACT QUERY IS ALWAYS UNDEFINED IN FIRST USEQUERY NEED TO UTILIZE ISLOADING
  if(isPostLoading) return <Loader/>

  return(
    <div className='flex flex-1'>
      <div className='common-container'>
          <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
              <img width={36} height={36} alt="add" src='../assets/icons/add-post.svg'/>
              <h2 className='text-left h3-bold md:h2-bold w-full'>Update Post </h2>
          </div>
          <PostForm post={post} action = 'update'/>
      </div>
    </div>
  )
}

export default EditPost