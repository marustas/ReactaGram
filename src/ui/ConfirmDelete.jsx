import React from 'react';

const ConfirmDelete = ({onConfirm, disabled, onCloseModal}) => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <h2 className='text-light-2 small-medium lg:base-regular'>
        Are you sure?
      </h2>
      <div className='flex flex-1 items-center justify-center gap-4'>
      <button disabled={disabled} className='ml-auto p-2 rounded-md bg-primary-500 hover:brightness-90 text-light-2' onClick={onCloseModal}>No</button>
        <button disabled={disabled} className='ml-auto p-2 rounded-md bg-[#b91c1c] text-light-2 hover:bg-[#991b1b]' onClick={onConfirm}>Yes</button>
      </div>
    </div>
  )
}

export default ConfirmDelete