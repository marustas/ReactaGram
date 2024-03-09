import React from 'react'
import PostList from './PostList'
import Loader from './Loader';

const SearchResults = ({posts, isSearching}) => {
  if(isSearching) return <Loader/>;

 if(posts.length > 0) return (
    <PostList posts={posts}/>
  )
  return <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
}

export default SearchResults