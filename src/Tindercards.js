import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card';
import database from './firebase.js';
import "./Tindercards.css"
const Tindercards = () => {
    const [people, setPeople]= useState([]);
    useEffect(()=>{
    const unsubcribe= database.collection('people').onSnapshot(snapshot=>{
       setPeople(snapshot.docs.map((doc)=>doc.data()));
       
     })
     // This is the cleanup lisenter 
     return ()=>{
      unsubcribe();
     }
     
     
     
    },[])
  return (
    <div className='tinderCards_cardContainer'>
       
          {people.map((person)=>{
            return(<TinderCard className='swipe' key={person.name} preventSwipe={["up","down"]}>
                <div className='card' style={{backgroundImage:`url(${person.url})`}}>
                  <h3>{person.name}</h3>
                </div>
            </TinderCard>
          )})
          }
          
       
    </div>
  )
}

export default Tindercards

