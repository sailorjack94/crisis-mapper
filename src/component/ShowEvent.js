import React from 'react'
import GlobeContainer from '../containers/GlobeContainer'



const ShowEvent = ({showEvent}) => {


    return (
        
         
        <div class = "click">
        
        <p>Location:{showEvent.ev_region}</p>
        <p>Time and Date: {showEvent.ev_event_time}</p>
        <p>Delta time:{showEvent.deltatime}</p>:
        </div>
        


    )
}

export default ShowEvent;