import React from 'react'
import GlobeContainer from '../containers/GlobeContainer'
import './ShowEvent.css'



const ShowEvent = ({showEvent}) => {


    return (
        
         <div class = "back">
        <div id = "click">
        
        <p>Location:{showEvent.ev_region}</p>
        <p>Time and Date: {showEvent.ev_event_time}</p>
        <p>Delta time:{showEvent.deltatime}</p>:
        </div>
        </div>
        


    )
}

export default ShowEvent;