import Globe from 'react-globe.gl';
import Overlay from '../components/Overlay';
import React, { useState, useRef, useEffect } from 'react';
import { cleanData, normaliseLabels, apiUrls, propertySort } from '../helpers/api_helper';
import ShowEvent from '../components/ShowEvent'

const GlobeContainer = () => {


    const map_center = useRef({ lat: 10, lng: 105, altitude: 1.0 });
    const globeElement = useRef({ map_center: map_center.current });
    const globeClickActive = useRef(false);
    const eventTypes = ["earthquakes", "volcanoes", "hurricanes", "wildfires"];


    const [countries, setCountries] = useState([]);
    const [events, setEvents] = useState([]);
    const [showEvent, setShowEvent] = useState(false)
    const [selector, setSelector] = useState(0);

    useEffect(() => {
        getCountries();
        globeElement.current.controls().autoRotate = true;
        globeElement.current.controls().autoRotateSpeed = 0.7;
    }, []);


    const getCountries = () => {
        fetch(apiUrls.countries)
            .then(res => res.json())
            .then(allCountries => allCountries.sort(propertySort('population')))
            .then(bigCountries => {
                // return only the top 70 countries by population
                let selected = bigCountries.slice(0, 70);
                setCountries(cleanData(selected, "countries"));
            });
    };

    const getEvents = (crisis) => {
        fetch(apiUrls[crisis])
            .then(res => res.json())
            .then(data => cleanData(data, crisis))
            .then(cleanedData => cleanedData.sort(propertySort('ev_mag_value')))
            .then(sortedData => {
                const newEvents = [...sortedData];
                setEvents(newEvents);
            });
    }

    const onCrisisChange = (crisis) => {
        getEvents(crisis);
        setSelector(1);
    };


    const zoomToPoint = (data) => {
        console.log(data)
        // capture the previous view
        if (!globeClickActive.current) {
            map_center.current = globeElement.current.pointOfView();
        };

        // create a new map_center using the coordinates of the event of interest
        const dataViewpoint = {
            lat: data.ev_latitude,
            lng: data.ev_longitude,
            altitude: 0.7
        };
        globeElement.current.pointOfView(dataViewpoint, 3500) // <- second arg is time to animate
        globeElement.current.controls().autoRotate = false;
        globeClickActive.current = true;
        setShowEvent(data)
    };

    const onGlobeClick = (event) => {
        if (globeClickActive.current) {
            globeElement.current.pointOfView(map_center.current, 3500)
            globeElement.current.controls().autoRotate = true;
            globeClickActive.current = false;
        };
    };

    if (selector === 0) {
        return (
            <div className="globe-container">
                <Overlay eventTypes={eventTypes} onCrisisChange={onCrisisChange} />
                <Globe
                    className="world"
                    ref={globeElement}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    onGlobeClick={({ lat, lng }, event) => onGlobeClick(event)}

                    //Countries
                    labelsData={countries}
                    labelSize={country => normaliseLabels(country.population, countries[countries.length - 1].population, countries[0].population)}
                    labelDotRadius={country => normaliseLabels(country.population, countries[countries.length - 1].population, countries[0].population, 0.5, 3.0)}
                    labelText={country => country.name}
                    labelLat={country => country.lat}
                    labelLng={country => country.lng}
                    labelColor={() => 'rgba(220, 155, 0, 0.70)'}
                />
            </div>
        );

    } else if (selector === 1) {
        return (
            <div className="globe-container">
                <Overlay eventTypes={eventTypes} onCrisisChange={onCrisisChange} />
                <Globe
                    className="world"
                    ref={globeElement}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    onGlobeClick={({ lat, lng }, event) => onGlobeClick(event)}

                    //Countries
                    labelsData={countries}
                    labelSize={country => normaliseLabels(country.population, countries[countries.length - 1].population, countries[0].population)}
                    labelDotRadius={country => normaliseLabels(country.population, countries[countries.length - 1].population, countries[0].population, 0.5, 3.0)}
                    labelText={country => country.name}
                    labelLat={country => country.lat}
                    labelLng={country => country.lng}
                    labelColor={() => 'rgba(220, 155, 0, 0.70)'}

                    //Earthquakes
                    pointsData={events}
                    pointLat={event => event.ev_latitude}
                    pointLng={event => event.ev_longitude}
                    pointLabel={event => event.ev_region}
                    pointColor={() => '#ff0000'}
                    pointRadius={0.5}
                    pointAltitude={event => normaliseLabels(event.ev_mag_value, events[events.length - 1].ev_mag_value, events[0].ev_mag_value, 0.01, 0.5)}
                    pointResolution={3}
                    //add callback function to display something. Callback event.
                    onPointClick={event => zoomToPoint(event)}

                />
                <ShowEvent showEvent={showEvent} />
            </div>
        );
    };
};

export default GlobeContainer;