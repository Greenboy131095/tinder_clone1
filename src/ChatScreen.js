import { useState } from "react";
import React  from 'react';
import { Avatar } from "@material-ui/core";
import './ChatScreen.css';
const ChatScreen = ({name}) => {
  
  const messages=[
      {
          name:'Elon',
          
          message0:[
            {
              name: 'Elon',
              message1:"Hey !",
              image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
            },
            {
              name: 'Elon',
              message1:"Hey,How are you !",
              image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
            },
            {
              
              message1:"Hey !",
             
            }
          ]
      },
      {
        name:"Elen",
        
        message0:[
          {
            name: 'Elen',
            message1:"How are you  !",
            image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          },
          {
            name: 'Elen',
            message1:"Hey,Why don't you answer my questions!",
            image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
          },
          {
            
            message1:"busy",
           
          }
        ]
    },
    {
      name:"Thomas",
     
      message0:[
        {
          name: 'Thomas',
          message1:"Hey !",
          image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
        },
        {
          
          message1:"Hey,How are you !",
          
        },
        {
          name: 'Thomas',
          message1:"Hey, Bae!",
          image:"https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
         
        }
      ]
    
    }

  ];
  function findName(userName){
    return userName.name ==={name}.name;
  }
  const variable= messages.find(findName);
  
 
  return (

    <div className='chatScreen'>
       <p className="chatScreen_timestamp">You Matched With {name}</p>
      
      {
        variable.message0.map(message=>{
           return(
            
           message.name?(
               <div className="chatScreen_message">
                  <Avatar src={message.image} alt={message.name}/>
                  <p className="chatScreen_text">{message.message1}</p>
               </div>
               
               
             ):(<div className="chatScreen_message">
               <p className="chatScreen_textUser">{message.message1}</p>
             </div>
            )
            
           )
        })
      }
      
    </div>
  )
}

export default ChatScreen;