import React from 'react';
import { IoMdClose } from 'react-icons/io';
import './CloseIcon.scss';

function CloseIcon({ className, onClick }) {
  return (
    <div
      className={`close-icon flex ai-center jc-center ${className}`}
      onClick={onClick}
    >
      <IoMdClose className="icon" />
    </div>
  );
}

export default CloseIcon;
