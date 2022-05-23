import React from 'react'
import Chat from './Chat.js'

const Chats = () => {
  return (
    <div className='chats'>
      <Chat 
      name="Elon" 
      message="Yo What's up?"
      timestamp="3 minutes ago"
      profilePic="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"/>
       <Chat 
      name="Elen" 
      message="Hey, how are you?"
      timestamp="3 seconds ago"
      profilePic=""/>
       <Chat 
      name="Thomas" 
      message="Hey, Bae!"
      timestamp="5 minutes ago" 
      profilePic=""/>

      

      
    </div>
  )
}

export default Chats