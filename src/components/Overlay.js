import CrisisSelector from './CrisisSelector';
import './Overlay.css';
import React, { Component } from "react";
import ModalContainer from './ModalContainer';
import VideoModalContainer from './VideoModalContainer';


const Overlay = ({eventTypes, onCrisisChange}) => {


    return (
        <div className="overlay">
            <h1>Crisis Mapper</h1>
            <div className="intro">
                <p>Use our interactive app to view major geological and meteorological events from around the world.</p>
                <p>Once you have selected a category, click on an event and more information will appear.</p>              
            </div>
            <ModalContainer />
            <div>
            <VideoModalContainer/>
            </div>
            <br></br>
            <CrisisSelector eventTypes={eventTypes} onCrisisChange={onCrisisChange}/>
        </div>
    );
}

export default Overlay;
