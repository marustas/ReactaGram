import React, { useState } from 'react'

import { useSearchPosts } from '../hooks/useSearchPosts';
import { useLoadPosts } from '../hooks/useLoadPosts';
import PostList from '../ui/PostList';
import useDebounce from '../hooks/useDebounce';
import SearchResults from '../ui/SearchResults';
import Loader from '../ui/Loader';

const Explore = () => {
    const [searchValue, setSearchValue] = useState('');
    const showSearchResults = searchValue !== '';
    const debouncedValue = useDebounce(searchValue, 500);
    const {posts, isPostLoading} = useLoadPosts();
    const {searchedPosts, isSearching} = useSearchPosts(debouncedValue);
    const shouldShowPosts = !showSearchResults && posts?.length > 0;

  return (
    <div className='explore-container'>
        <div className='explore-inner_container'>
            <h2 className='h3-bold md:h2-bold w-full'>Search posts</h2>
            <div className='flex gap-1 rounded-lg bg-dark-4 w-full px-4'>
                <img src='../public/assets/icons/search.svg' width={24} height={24} alt='search'/>
                <input value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} type='text' placeholder='search by caption' className='explore-search w-full'/>
            </div>
        </div>
        <div className='flex-between w-full max-w-5xl mt-16 mb-7'>
            <h3 className='body-bold md:h3-bold'>Popular Today</h3>
            <div className='flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer'>
                <p className='small-medium md:base-medium text-light-2'>All</p>
                <img src='../assets/icons/filter.svg' alt='filter' width={20} height={20}/>
            </div>
        </div>
        <div className='flex flex-wrap gap-9 w-full max-w-5xl'>
            {isPostLoading && <Loader/>}
            {showSearchResults ? <SearchResults isSearching ={isSearching} posts={searchedPosts}/> :
            shouldShowPosts ? <PostList posts={posts}/> : <p className='text-light-4 mt-10 text-center w-full'>No posts</p>}
        </div>
    </div>
  )
}

export default Explore