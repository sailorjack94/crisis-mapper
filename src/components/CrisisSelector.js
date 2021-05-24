import React from 'react';
import './CrisisSelector.css'

const CrisisSelector = ({eventTypes, onCrisisChange}) => {

    const crises = eventTypes.map((type, index) => {
        return <option value={type} key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
    });

    const handleCrisisChange = (event) => {
        onCrisisChange(event.target.value);
    }

    return (
        <div className="crisis-wrapper">
            <select onChange = {handleCrisisChange} className="optionbox" defaultValue="">
                <option value="" disabled>Select a crisis to display</option>
                {crises}
            </select>
        </div>
    );
};

export default CrisisSelector;