import React from 'react'

const Message = ({ message, sender, id }) => {
  <div className={`text-message ${sender == id ? 'my-text' : 'other-text'}`}>
    <p className='text'>{message}</p>
  </div> 
}