import React from 'react'
import FileUploader from './FileUploader'
import toast from "react-hot-toast";
import { useUser } from '../hooks/useUser';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

const PostForm = ({post}) => {
  const {user} = useUser();
  const navigate = useNavigate();
  const {handleSubmit, register } = useForm();

  const createPost = (caption, tags, location, id)=>{
    if(!caption || !tags || !location || !id) return null;
    
    return {
      caption: caption,
      tags: tags,
      location: location,
      userID: id
     }
  }

  function onSubmit({caption, tags, location}){
    const newPost = createPost(caption, tags, location, user.id );

     if(!newPost){
      toast.error('Please try again')
     }
     console.log(newPost);
     navigate("/");
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-9 w-full max-w-5xl'>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Caption</label>
        <textarea {...register("caption")} className='px-3 py-2 rounded-md shad-textarea custom-scrollbar' placeholder='Caption'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add Tags (separated by comma " , ")</label>
        <input {...register("tags")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Sports, Arts, History'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label>Post image</label>
        <FileUploader {...register("media")} fieldChange={[]} mediaUrl = {post?.imageUrl}/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add location</label>
        <input {...register("location")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Location'/>
      </div>
      <div className='flex gap-4 items-center justify-end'>
        <button className='p-3 rounded-md shad-button_dark_4'>Cancel</button>
        <button type='submit' className='p-3 rounded-md shad-button_primary whitespace-nowrap'>Submit</button>
      </div>
    </form>
  )
}

export default PostForm