export const apiUrls = {
    countries: 'https://restcountries.eu/rest/v2/all',
    earthquakes: 'https://seismicportal.eu/mtws/api/search?&format=json&downloadAsFile=false&orderby=time-desc&offset=30&limit=100',
    volcanoes: 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=significant-volcanic-eruption-database&q=&rows=250&facet=year&facet=tsu&facet=eq&facet=name&facet=location&facet=country&facet=type&facet=status&facet=deaths_description&facet=missing_description&facet=injuries_description&facet=damage_description&facet=houses_destroyed_description&facet=total_deaths_description&facet=total_missing_description&facet=total_injuries_description&facet=total_damage_description&facet=total_houses_destroyed_description&facet=houses_damaged_description',
    wildfires: 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8?days=20&status=open'
}
export const cleanData = function (data, dtype) {
   
    let cleanedData;
    switch (dtype) {
        case "countries":
            cleanedData = data.map(datum => {
                datum.name = addLineBreak(datum.name);
                return {
                    name: datum.name,
                    population: datum.population,
                    area: datum.area,
                    pop_density: (datum.population / datum.area),
                    lat: datum.latlng[0],
                    lng: datum.latlng[1]
                };
            });
            break;
        case "earthquakes":
            cleanedData = data.map(datum => {
                return {
                    ev_region: datum.ev_region,
                    time: datum.ev_event_time,
                    depth: datum.ev_depth,
                    ev_mag_value: datum.ev_mag_value,
                    ev_latitude: datum.ev_latitude,
                    ev_longitude: datum.ev_longitude
                };
            });
            break;
        case "volcanoes":
            const records = data.records;
            cleanedData = records.map(record => {
                let ev_year = record.fields.year;
                // volcanos have a vei (volcanic explosivity index)
                // 0 (0.0001 km3) - 8 (1000 km3). use this as surrogate for magnitude
                const newData = {
                    name: record.fields.name,
                    ev_region: `${ record.fields.location }, ${ record.fields.country }`,
                    type: record.fields.type,
                    ev_latitude: record.fields.coordinates[0],
                    ev_longitude: record.fields.coordinates[1],
                    elevation: record.fields.elevation,
                    time: ev_year< 0 ? ev_year.toString() + 'BC' : ev_year,
                    ev_mag_value: 0,
                    deaths: "no data"
            };
            if (record.fields.hasOwnProperty('total_deaths_description')) {
                newData.deaths = record.fields.total_deaths_description;
            };
            if (record.fields.hasOwnProperty('vei')) {
                newData.ev_mag_value = record.fields.vei;
            };
            return newData;
    });
    break;
    case "wildfires":
            cleanedData = data.events.map(datum => {
                return {
                    ev_region: datum.title,
                    time: datum.geometries[0].date,
                    ev_mag_value:10,
                    ev_latitude: datum.geometries[0].coordinates[0],
                    ev_longitude: datum.geometries[0].coordinates[1]
                };
            })
        break;

        default:
break;
    }
    console.log(cleanedData)
return cleanedData;
};
export const normaliseLabels = function (data, propLow, propHigh, normLow = 0.5, normHigh = 2.5) {
    // normalise label size within the range [0.5, 2.5]
    // default determined from testing
    if (data === 0) {
        return normLow;
    };
    const normRange = normHigh - normLow;
    const normal = (((data - propLow) / (propHigh - propLow)) * normRange) + normLow;
    return normal;
};
export const propertySort = (prop) => {
    return function (a, b) {
        return (a[prop] < b[prop]) ? 1 : (a[prop] > b[prop]) ? -1 : 0;
    };
};
const addLineBreak = function (input) {
    // inner helper function:
    // add new to long input strings
    const words = input.split(" ");
    if (words.length <= 1) {
        return input;
    }
    if (words[1].startsWith('(')) {
        words[1] = "\n" + words[1];
    } else {
        words[1] += "\n";
    };
    return words.join(" ");
}





















