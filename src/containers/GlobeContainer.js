import Globe from 'react-globe.gl';
import Overlay from '../components/Overlay';
import React, {useState, useRef, useEffect} from 'react';
import {cleanCountries, normaliseLabels} from '../helpers/api_helper';

const GlobeContainer = () => {

    const globeElement = useRef()

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
            return (a[prop] < b[prop]) ? 1: (a[prop] > b[prop]) ?-1 : 0;
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

    return (
        <div className="globe-container">
            <Overlay />
            <Globe
                className="world"
                ref={globeElement}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

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
                pointRadius = {2.5}
                //add callback function to display something. Callback event.
                //onPointClick = {}

            />
        </div>
    );
};

export default GlobeContainer;