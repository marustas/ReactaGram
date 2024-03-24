import React, { cloneElement, createContext, useContext, useState } from 'react'

const ModalContext = createContext();

const Modal = ({children}) => {

    const [openName, setOpenName] = useState('');
    const close = ()=>setOpenName('');
    const open = setOpenName;

  return (
    <ModalContext.Provider value={{openName, open, close}}>
        {children}
    </ModalContext.Provider>
  )
}

const Open = ({children, opens: opensWindowName})=>{
    const {open} = useContext(ModalContext);
    return cloneElement(children, {onClick: ()=> open(opensWindowName)})
}

const Window = ({children, name})=>{
    const {close, openName} = useContext(ModalContext);

    if(name !== openName) return null;

    return (
    <div className='bg-dark-4 fixed top-[10%] left-[88%] rounded-md px-5 py-5 gap-2'>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
    </div> 
    )
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal