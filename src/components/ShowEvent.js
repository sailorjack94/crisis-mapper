import React from 'react'
// import GlobeContainer from '../containers/GlobeContainer'
import './ShowEvent.css'

const ShowEvent = ({showEvent}) => {

    return ( 
         <div id="click">
            <h5><b>Event Region: </b></h5>
            <p>{showEvent.ev_region}</p>
            <h5>Event Time: </h5>
            <p>{showEvent.time}</p>
            <h5>Event Magnitude: </h5>
            <p>{showEvent.ev_mag_value}</p>
            <b><a className = 'url' rel="noreferrer" target='_blank' href={showEvent.url}>Find out more...</a></b>
         </div> 
    )
}

export default ShowEvent;