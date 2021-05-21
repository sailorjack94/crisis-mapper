import Globe from 'react-globe.gl';
import React, {useState, useRef, useEffect} from 'react';





const GlobeContainer = () => {

    const globeElement = useRef()

    const [countries, setCountries] = useState([])

    useEffect(() => {
        getCountries()
        globeElement.current.controls().autoRotate = true;
        globeElement.current.controls().autoRotateSpeed = 1.0;
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



    return (
        <Globe
            ref = {globeElement}
            className="world"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            labelsData = {countries}
            labelSize = {country => Math.log10(country.population) * 4e-1}
            labelText = {country => country.name}
            labelLat = {country => country.latlng[0]}
            labelLng = {country => country.latlng[1]}
            labelsTest = {country => country.name}
        />
    );
};

export default GlobeContainer;