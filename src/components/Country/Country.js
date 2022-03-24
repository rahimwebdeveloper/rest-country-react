import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {name, area, population, region} = props.country
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <p>Population : {population}</p>
            <p><small> Region: {region}</small></p>
        </div>
    );
};

export default Country;