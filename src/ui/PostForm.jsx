import React from 'react'
import FileUploader from './FileUploader'

const PostForm = () => {
  return (
    <form className='flex flex-col gap-9 w-full max-w-5xl'>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Caption</label>
        <textarea className='px-3 py-2 rounded-md shad-textarea custom-scrollbar' placeholder='Caption'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add location</label>
        <input type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Location'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label className='shad-form_label'>Add Tags (separated by comma " , ")</label>
        <input type="text" className='px-3 py-2 rounded-md shad-input' placeholder='Sports, Arts, History'/>
      </div>
      <div className='flex flex-col gap-2 py-1.5'>
        <label>Post image</label>
        <FileUploader/>
      </div>
      <div className='flex gap-4 items-center justify-end'>
        <button className='p-3 rounded-md shad-button_dark_4'>Cancel</button>
        <button type='submit' className='p-3 rounded-md shad-button_primary whitespace-nowrap'>Submit</button>
      </div>
    </form>
  )
}

export default PostForm