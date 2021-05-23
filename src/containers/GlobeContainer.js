import Globe from 'react-globe.gl';
import Overlay from '../components/Overlay';
import React, {useState, useRef, useEffect} from 'react';
import {cleanCountries, normaliseLabels} from '../helpers/api_helper';

const GlobeContainer = () => {

    
    const map_center = useRef({lat: 10, lng: 105, altitude: 1.0});
    const globeElement = useRef({map_center: map_center.current});
    const globeClickActive = useRef(false);
    const eventTypes = ["earthquakes", "volcanos", "hurricanes", "wildfires"];

    const [populationRange, setPopulationRange] = useState({});
    const [countries, setCountries] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getCountries();
        getEvents();
        globeElement.current.controls().autoRotate = true;
        globeElement.current.controls().autoRotateSpeed = 0.7;
    }, []);

    useEffect(() => {
        getRange();
    }, [countries])

    const getCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(allCountries => allCountries.sort(propertySort('population')))
        .then(bigCountries => {
            // return only the top 50 countries by population
            let selected = bigCountries.slice(0, 50);
            selected = cleanCountries(selected);
            setCountries(selected);
        });
    };

    const propertySort = (prop) => {
        return function(a,b) {
            return (a[prop] < b[prop]) ? 1: (a[prop] > b[prop]) ? -1 : 0;
        };
    };

    const getEvents = () => {
        fetch('https://seismicportal.eu/mtws/api/search?&format=json&downloadAsFile=false&orderby=time-desc&offset=30&limit=100')
            .then(res => res.json())
            .then(eventsData => setEvents(eventsData));
    }

    const getRange = () => {
        // get largest and smallest country populations
        if (countries.length) {
            const end = countries.length - 1;
            const range = {low: countries[end].population,
                    high: countries[0].population,
                    range: countries[0].population - countries[end].population}
            setPopulationRange(range);
        };  
    };

    const zoomToPoint = (data) => {
        // capture the previous view
        map_center.current = globeElement.current.pointOfView();
        
        // create a new map_center using the coordinates of the event of interest
        const dataViewpoint = { lat: data.ev_latitude,
                               lng: data.ev_longitude,
                               altitude: 0.5 };
        globeElement.current.pointOfView(dataViewpoint, 3500) // <- second arg is time to animate
        globeElement.current.controls().autoRotate = false;
        globeClickActive.current = true;
    };

    const onGlobeClick = (event) => {
        console.log(event);
        console.log(globeClickActive.current)
        if (globeClickActive.current) {
            globeElement.current.pointOfView(map_center.current, 3500) 
            globeElement.current.controls().autoRotate = true;
            globeClickActive.current = false;
        }
    }

    return (
        <div className="globe-container">
            <Overlay eventTypes={eventTypes}/>
            <Globe
                className="world"
                ref={globeElement}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                onGlobeClick={({lat, lng}, event) => onGlobeClick(event) }

                //Countries
                labelsData={countries}
                labelSize={country => normaliseLabels(country.population, populationRange)}
                labelDotRadius={country => normaliseLabels(country.population, populationRange, 0.5, 3.0)}
                labelText={country => country.name}
                labelLat={country => country.lat}
                labelLng={country => country.lng}
                labelColor={() => 'rgba(220, 155, 0, 0.70)'}

                //Earthquakes
                pointsData = {events}
                pointLat = {event => event.ev_latitude}
                pointLng = {event => event.ev_longitude}
                pointLabel = {event => event.ev_region}
                pointColor = {() => '#ff0000'}
                //add function to scale radius depending on magnitude
                pointRadius = {0.5}
                //add callback function to display something. Callback event.
                onPointClick = {event => zoomToPoint(event)}

            />
        </div>
    );
};

export default GlobeContainer;