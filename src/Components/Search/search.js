import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GeoApiOptions, GEO_API_URL } from '../../api';


const Sea = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
            GeoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        };
                    }),
                };
            });
    };
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )


}

export default Sea