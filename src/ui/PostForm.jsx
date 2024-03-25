import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

import FileUploader from './FileUploader';
import Loader from "../ui/Loader";
import { useUser } from '../hooks/useUser';
import { useCreatePost } from '../hooks/useCreatePost';
import { createPostObject } from '../services/utils';
import { useUpdatePost } from '../hooks/useUpdatePost';
import { useNavigate } from "react-router-dom";

const PostForm = ({post, action}) => {
  const {user} = useUser();
  const {username} = user.user_metadata;
  const {handleSubmit, register } = useForm();
  const {isPosting, createPost} = useCreatePost();
  const [postImage, setPostImage] = useState(null);
  const {isUpdating, updatePost} = useUpdatePost();
  const navigate = useNavigate();
  
  function onSubmit({caption, tags, location}){
    const newPostData = createPostObject(caption, tags, location, username, postImage, user.id, action);

     if(!newPostData){ 
      toast.error('Some fields are missing'); 
      return;
     }

     if(action === 'create'){
      createPost(newPostData);
     }

     if(action === 'update'){
      updatePost({newPostData, id: post.id});
     }

  } 
  
  if(isPosting) return <div className='w-full flex items-center justify-center'><Loader/></div>;

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-9 w-full max-w-5xl'>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Caption</label>
          <textarea disabled={isPosting || isUpdating} {...register("caption")} className='px-3 py-2 rounded-md shad-textarea custom-scrollbar' placeholder= { action === 'update' ? post?.caption : 'Caption'}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Add Tags (separated by comma " , ")</label>
          <input disabled={isPosting || isUpdating}  {...register("tags")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder = { action === 'update' ? post?.tags : 'Sports, Art, History'}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label>Post image</label>
          <FileUploader handleSetImage = {setPostImage} mediaUrl = {post?.mediaUrl}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Add location</label>
          <input disabled={isPosting || isUpdating}  {...register("location")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder={ action === 'update' ? post?.location : 'Location'}/>
        </div>
        <div className='flex gap-4 items-center justify-end'>
          <button onClick={()=>navigate(-1)} className='p-3 rounded-md shad-button_dark_4'>Cancel</button>
          <button type='submit' className='p-3 rounded-md shad-button_primary whitespace-nowrap'>Submit</button>
        </div>
      </form>
    )
  
}

export default PostForm