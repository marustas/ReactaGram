import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex flex-1'>
        <div className='common-container'>
            <div className='max-w-5xl flex-start gap-3 justify-start w:full'>
                <img width={36} height={36} alt="add" src='../assets/icons/add-post.svg'/>
                <h2 className='h3-bold md:h2-bold text-left w-full'>Create Post</h2>
            </div>
        </div>
    </div>
  )
}

export default CreatePost