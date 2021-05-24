import React from 'react';
import CrisisSelector from './CrisisSelector';
import './Overlay.css';

const Overlay = ({eventTypes, onCrisisChange}) => {
    return (
        <div className="overlay">
            <h1>Crisis Mapper</h1>
            <div className="intro">
                <p>
                    Use our interactive app to view major geological and meteorological events from around the world
                </p>                
            </div>
            <CrisisSelector eventTypes={eventTypes} onCrisisChange={onCrisisChange}/>
        </div>
    );
}

export default Overlay;