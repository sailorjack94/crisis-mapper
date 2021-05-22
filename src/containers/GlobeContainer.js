import Globe from 'react-globe.gl';
import React, {useState, useRef, useEffect} from 'react';





const GlobeContainer = () => {

    var selector = 1;

    const globeElement = useRef()

    const [countries, setCountries] = useState([])
    const [quakes, setQuakes] = useState([])
    const [floods, setFloods] = useState([])

    useEffect(() => {
        getCountries()
        getQuakes()
        //globeElement.current.controls().autoRotate = true;
        //globeElement.current.controls().autoRotateSpeed = 1.0;
    }, [])

    const getCountries = () => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(allCountries => allCountries.sort(propertySort('population')))
        .then(bigCountries => {
            setCountries(bigCountries.slice(0,20))
        });
    };

    const propertySort = (prop) => {
     return function(a,b) {
         return (a[prop] < b[prop]) ? 1: (a[prop] > b[prop]) ?-1 : 0;
     };
 };

    const getQuakes = () => {
        fetch('https://seismicportal.eu/mtws/api/search?minmag=5.1&format=json&downloadAsFile=false&orderby=time-desc&offset=0&limit=20')
            .then(res => res.json())
            .then(quakeData => setQuakes(quakeData))
    }

    const getFloods = () => {
        fetch('https://api.reliefweb.int/v1/disasters?appname=rwint-user-0&profile=list&preset=latest&slim=1')
        .then (res => res.json())
        .then (floodsData => setFloods(floodsData))
    }

    if (selector === 0) {



    return (
  
        <Globe
            ref={globeElement}
            className="world"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"


            //Countries
            labelsData={countries}
            labelSize={country => Math.log10(country.population) * 4e-1}
            labelText={country => country.name}
            labelLat={country => country.latlng[0]}
            labelLng={country => country.latlng[1]}
            labelsTest={country => country.name}

            //Earthquakes
            // pointsData = {events}
            // pointLat = {event => event.ev_latitude}
            // pointLng = {event => event.ev_longitude}
            // pointLabel = {event => [event.ev_mag_value, event.ev_region]}
            // pointColor = {() => '#ff0000'}
            //add function to scale radius depending on magnitude
            // pointAltitude = {event => (event.ev_mag_value - 5)/4}
            // pointRadius = {1}
            //add callback function to display something. Callback event.
            //onPointClick = {}

        />
    );
    } else if (selector === 1) {
        return(
            <Globe
            ref={globeElement}
            className="world"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"


            //Countries
            // labelsData={countries}
            // labelSize={country => Math.log10(country.population) * 4e-1}
            // labelText={country => country.name}
            // labelLat={country => country.latlng[0]}
            // labelLng={country => country.latlng[1]}
            // labelsTest={country => country.name}

            //Earthquakes
            pointsData = {quakes}
            pointLat = {event => event.ev_latitude}
            pointLng = {event => event.ev_longitude}
            pointLabel = {event => [event.ev_mag_value, event.ev_region]}
            pointColor = {() => '#ff0000'}
            //add function to scale radius depending on magnitude
            pointAltitude = {event => (event.ev_mag_value - 5)/4}
            pointRadius = {1}
            //add callback function to display something. Callback event.
            //onPointClick = {}

        />
        )
    } 
};

export default GlobeContainer;