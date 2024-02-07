import React from 'react'

const PostForm = () => {
  return (
    <form>
      <label>Caption</label>
      <input type='textarea'/>
      <label>Post image</label>
      <input placeholder='' type='file'/>
    </form>
  )
}

export default PostForm