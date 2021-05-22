import Globe from 'react-globe.gl';
import React, {useState, useRef, useEffect} from 'react';





const GlobeContainer = () => {

    var selector = 0;

    const globeElement = useRef()

    const [countries, setCountries] = useState([])
    const [events, setEvents] = useState([])
    const [selectEvent, setSelectEvent] =useState(null)

    useEffect(() => {
        getCountries()
        getEvents()
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

    const getEvents = () => {
        fetch('https://seismicportal.eu/mtws/api/search?&format=json&downloadAsFile=false&orderby=time-desc&offset=30&limit=100')
            .then(res => res.json())
            .then(eventsData => setEvents(eventsData))
    }

    const onEventClicked =function (event) {
        setSelectEvent(event)


    }





    return (
  
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
            pointsData = {events}
            pointLat = {event => event.ev_latitude}
            pointLng = {event => event.ev_longitude}
            pointLabel = {event => event.ev_region}
            pointColor = {() => '#ff0000'}
            //add function to scale radius depending on magnitude
            pointRadius = {0.5}
            //add callback function to display something. Callback event.
            //onPointClick = {}

        />
    );
};

export default GlobeContainer;