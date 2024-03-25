import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import FileUploader from './FileUploader';
import { useForm } from 'react-hook-form';

const ProfileForm = ({profile}) => {
    const navigate = useNavigate();
    const {handleSubmit, register } = useForm();
    const {profileImage, setProfileImage} = useState(profile.profileImage);
    function onSubmit(){

    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-9 w-full max-w-5xl'>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Name</label>
          <textarea disabled={isUpdating} {...register("name")} className='px-3 py-2 rounded-md shad-textarea custom-scrollbar' placeholder= { profile?.name}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Username</label>
          <input disabled={isUpdating}  {...register("username")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder = { profile?.username}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label>Profile image</label>
          <FileUploader handleSetPostImage = {setProfileImage} mediaUrl = {profile?.profileImage}/>
        </div>
        <div className='flex flex-col gap-2 py-1.5'>
          <label className='shad-form_label'>Bio</label>
          <input disabled={isUpdating}  {...register("bio")} type="text" className='px-3 py-2 rounded-md shad-input' placeholder={ profile?.bio}/>
        </div>
        <div className='flex gap-4 items-center justify-end'>
          <button onClick={()=>navigate(-1)} className='p-3 rounded-md shad-button_dark_4'>Cancel</button>
          <button type='submit' className='p-3 rounded-md shad-button_primary whitespace-nowrap'>Submit</button>
        </div>
      </form>
  )
}

export default ProfileForm