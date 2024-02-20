import React from "react";
import Loader from "../ui/Loader"
import { useLoadPosts } from "../hooks/useLoadPosts";
import PostCard from "../ui/PostCard";

const Home = () => {
  const {posts, isPostLoading} = useLoadPosts();
  return( 
    <div className="flex flex-1f">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Some Feed</h2>
          {isPostLoading && !posts ? <Loader/> : (
          <ul className="flex flex-col gap-9 w-full flex-1">
            {posts.map((post)=> <PostCard key={post.id} post = {post}/>)}
          </ul> 
            )}
        </div>
      </div>
    </div>);
};

export default Home;
