import Globe from 'react-globe.gl';
import React from 'react';

            

const GlobeContainer = () => {

    return (
        <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        />);

    };



export default GlobeContainer;