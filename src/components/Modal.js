import React, { useEffect } from 'react'

const Modal = ({ closeModal, contentModal }) => {
    useEffect(() => {
        setTimeout(() => {
          closeModal();
        }, 2000);
      });
    
      return <div className="modal">{contentModal}</div>;
}

export default Modal