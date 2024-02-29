import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import FileUploader from './FileUploader';
import Loader from "../ui/Loader";
import { useUser } from '../hooks/useUser';
import { useCreatePost } from '../hooks/useCreatePost';


const PostForm = ({post}) => {
  const {user} = useUser();
  const {username} = user.user_metadata;
  const {handleSubmit, register } = useForm();
  const {isPosting, createPost} = useCreatePost();
  const [postImage, setPostImage] = useState(null);

  const createPostObject = (caption, tags, location, username, image, userID)=>{
    if(!caption || !tags || !location || !username || !image || !userID) return null;

    return {
      caption: caption,
      tags: tags,
      location: location,
      username: username,
      likes: [],
      postImage: image,
      mediaUrl: "",
      userID: userID,
      saved: []
     }
  }

  function onSubmit({caption, tags, location}){
    const newPostData = createPostObject(caption, tags, location, username, postImage, user.id);

     if(!newPostData) return;
     createPost(newPostData);
  } 
  if(isPosting) return <div className='w-full flex items-center justify-center'><Loader/></div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-9 w-full max-w-5xl'>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Caption</label>
        <textarea disabled={isPosting} {...register("caption")} className='px-3 py-2 rounded-md shad-textarea custom-scrollbar' placeholder='Caption'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add Tags (separated by comma " , ")</label>
        <input disabled={isPosting}  {...register("tags")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Sports, Arts, History'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label>Post image</label>
        <FileUploader handleSetPostImage = {setPostImage} mediaUrl = {post?.imageUrl}/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add location</label>
        <input disabled={isPosting}  {...register("location")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Location'/>
      </div>
      <div className='flex gap-4 items-center justify-end'>
        <button className='p-3 rounded-md shad-button_dark_4'>Cancel</button>
        <button type='submit' className='p-3 rounded-md shad-button_primary whitespace-nowrap'>Submit</button>
      </div>
    </form>
  )
}

export default PostForm