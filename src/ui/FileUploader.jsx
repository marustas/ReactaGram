import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const FileUploader = ({fieldChange, mediaUrl}) => {
  const [fileUrl, setFileUrl] = useState('');
  const [file, setFile] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles);
    fieldChange = acceptedFiles;
    setFileUrl(URL.createObjectURL(acceptedFiles[0]));

  }, [fieldChange, file])

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept:{"image/*": ['.png', '.jpg', '.jpeg', '.svg',]}});
  return (
    <div className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer' {...getRootProps()}>
      <input className='cursor-pointer' {...getInputProps()} />
      {
        fileUrl ? (
          <>
           <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
              <img className='file_uploader-img' alt="uploaded-file" src={fileUrl}/>
           </div> 
           <p className='file_uploader-label'>Click or drag photo to replace</p>
           </>) : (
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