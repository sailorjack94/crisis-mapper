import React from 'react'
import GlobeContainer from '../containers/GlobeContainer'
import './ShowEvent.css'



const ShowEvent = ({showEvent}) => {


    return (
       
    
         <div id = "click" >
            
        
        <p>{showEvent.ev_region}</p>
        <p>{showEvent.ev_event_time}</p>
        <p>{showEvent.deltatime}</p>
         </div> 
        
        


    )
}

export default ShowEvent;