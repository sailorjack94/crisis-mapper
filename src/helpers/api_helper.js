export const cleanCountries = function(countries) {
    
    const addLineBreak = function(input) {
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

    const cleanedData = countries.map( country => {
        country.name = addLineBreak(country.name);
        return {name: country.name,
                population: country.population,
                area: country.area,
                pop_density: (country.population / country.area),
                lat: country.latlng[0],
                lng: country.latlng[1]}
    })

    return cleanedData;
};

export const normaliseLabels = function(data, range, norm_low=0.5, norm_high=2.5) {
    // normalise label size within the range [0.5, 2.5] (determined from testing)

    const norm_range = norm_high - norm_low;
    // console.log(range, data);
    // console.log(((data - range.low) / range.range) * LABEL_RANGE + LABEL_MIN)
    return ( (((data - range.low) / range.range) * norm_range) + norm_low)

}