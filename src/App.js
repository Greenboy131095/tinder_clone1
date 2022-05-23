
import './App.css';
import { useState } from 'react';
import Header from './Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  
} from "react-router-dom";
import Tindercards  from './Tindercards';
import SwipeButtons from './SwipeButtons'
import { Fragment } from 'react';
import Chats from './Chats'
import ChatScreen from './ChatScreen.js'
function App() {
  const [peoples, setPeoples]=useState([
    {
      name:"Elon"
       
       
    },
    {
       name:"Elen"
      
  },
  {
     
     name:'Thomas'
  }

]);
  return (
    <div className="App">
     
     
    
     <Router>
    

       <Routes>
        {peoples.map(people=>{
          return(
            <Route path={`/chats/${people.name}`} 
            element={
              <Fragment>
                <Header backButtons='/chats' />
                <ChatScreen name={people.name}/>
              </Fragment>}/>
          )
        })}
       
         <Route path="/" element={
           <Fragment>
              <Header/>
              <Tindercards/>
              <SwipeButtons/>
           </Fragment>
            }>
       

         
         </Route>

         <Route path='/chats' element={
           <Fragment>
             <Header backButtons='/' />
             <Chats/>
           </Fragment>}>

         </Route>
        

        
       </Routes>
     </Router>
     
    </div>
  );
}

export default App;
