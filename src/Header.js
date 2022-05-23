import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import "./Header.css";
import { IconButton } from '@material-ui/core';
import {Link,useNavigate} from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Header = ({backButtons}) => {
  const history = useNavigate();
  return (
   
    <div className="header">
      
        {backButtons?(
          <IconButton onClick={()=>history(backButtons)}>
            <ArrowBackIcon className='header_icon' fontSize='large'/>
          </IconButton>

          
        ):(
          <IconButton>
            <PersonIcon className='header_icon' fontSize='large'/>
          </IconButton>
         
        )}
      
      
       
        
        <Link to='/'>
       < img  className="header-logo" alt="tinder logo"
        src="https://logos-world.net/imageup/Tinder/Tinder-Logo-PNG4.png">
      </img>
        </Link>
         <Link to='/chats'>
         <IconButton>
         <QuestionAnswerIcon  className='header_icon' fontSize='large'/>
         </IconButton>
         </Link>
        
      
      
        
    </div>
  )
}

export default Header