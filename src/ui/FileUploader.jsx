import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const FileUploader = () => {
  const [fileUrl, setFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  return (
    <div className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer' {...getRootProps()}>
      <input className='cursor-pointer' {...getInputProps()} />
      {
        fileUrl ? (
           <div>

           </div> ) : (
           <div className='file_uploader-box'>
            <img width={96} height={77} alt="upload-icon" src='../assets/icons/file-upload.svg'/>
            <h3 className='base-medium mb-2 mt-6 text-light-2'>Drag photo here</h3>
            <p className='text-light-4 small-regular mb-6'>SVG, PNG, JPG</p>
            <button className='items-center rounded-md shad-button_dark_4'>Select from computer</button>
           </div> )
      }
    </div>
  )
}

export default FileUploader