import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, population, region, flags} = props.country
    return (
        <div className='country bg-primary'>
            <h1>Name: {name.common}</h1>
            <p>Area: {area}, Population : {population}</p>
            <p></p>
            <p><small> Region: {region}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;