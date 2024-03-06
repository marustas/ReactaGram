import React from 'react';

const ConfirmDelete = ({onConfirm, disabled}) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-light-2 small-medium'>
        Are you sure you want to delete this post?
      </h2>
      <div className='flex flex-1 flex-row gap-6'>
        <button disabled={disabled} className='ml-auto p-2 rounded-md bg-[#b91c1c] text-light-2 hover:bg-[#991b1b]' onClick={onConfirm}>Yes</button>
      </div>
    </div>
  )
}

export default ConfirmDelete