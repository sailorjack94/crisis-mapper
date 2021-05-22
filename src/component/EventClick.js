import React from 'react'

const EventClick =({ events, onEventClick}) => {
    
    const handleClick =function (event){
        const chosenEvent = events[event.target.value];
        onEventClick(chosenEvent)
    }
    return(

        <div onEvent = {handleClick}>
            <p>{events.ev_name}</p>


        </div>
    )
}


export default EventClick