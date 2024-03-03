import React from 'react';
import PostForm from '../ui/PostForm';
import { usePost } from '../hooks/usePost';

const EditPost = () => {
  const {data:post} = usePost();

  <div className='flex flex-1'>
  <div className='common-container'>
      <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <img width={36} height={36} alt="add" src='../assets/icons/add-post.svg'/>
          <h2 className='text-left h3-bold md:h2-bold w-full'>Create Post</h2>
      </div>
      <PostForm post={post} action = 'update'/>
  </div>
</div>
}

export default EditPost