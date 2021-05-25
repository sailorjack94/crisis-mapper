import CrisisSelector from './CrisisSelector';
import './Overlay.css';
import React, { Component } from "react";
import ModalContainer from './ModalContainer';


const Overlay = ({eventTypes, onCrisisChange}) => {


    return (
        <div className="overlay">
            <h1>Crisis Mapper</h1>
            <div className="intro">
                <p>
                    <p>Use our interactive app to view major geological and meteorological events from around the world.</p>

                    <p>Once you have selected a category, click on an event and more information will appear.</p>
                </p>                
            </div>
            <CrisisSelector eventTypes={eventTypes} onCrisisChange={onCrisisChange}/>
            <br></br>
            <ModalContainer />
        </div>
    );
}

export default Overlay;
