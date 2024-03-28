import React from 'react'

import { useLoadPosts } from '../hooks/useLoadPosts'
import { useUser } from '../hooks/useUser';
import Loader from '../ui/Loader';
import PostList from '../ui/PostList';


const Saved = () => {
  const {isPostLoading, posts} = useLoadPosts();
  const {user} = useUser();

  if(isPostLoading) return <Loader/>;

  const filteredPosts = posts.filter((post)=>post.saved.includes(user.id));

    return (
    <div className='saved-container'>
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="../assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
      </div>
      { 
      filteredPosts.length === 0 ? <p className='text-light-4 mt-10 text-center w-full'>You haven't saved any posts</p> :
            <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
                <PostList posts={filteredPosts}/>
            </div>
    }
</div>
  )
}

export default Saved